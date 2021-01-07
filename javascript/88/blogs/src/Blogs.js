import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import BlogList from './BlogList';

export default function Blogs() {
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const blogs = await response.json();
                setBlogs(blogs);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    if (!blogs) {
        return null;
    }

    return (
        <div>
            <h2>Blogs</h2>

            <ul>
                <BlogList blogs={blogs} />
            </ul>
        </div>
    )
}