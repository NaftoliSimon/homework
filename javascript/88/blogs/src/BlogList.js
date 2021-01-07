import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function Blogs(props) {
    let blogs = props.blogs;

    const blogList = blogs.map((blog) => <div>
        <li key={blog.id}><Link to={`/blog/${blog.id}`}><h4>{blog.name}</h4></Link></li>
        <li>{blog.website}</li>
        <div>
            <li>{blog.company.name}</li>
            <li>{blog.company.catchPhrase}</li>
            <li>{blog.company.bs}</li>
        </div>
    </div>)
    return (
        <div>
            <ul>
                {blogList}
            </ul>
        </div>
    )
}