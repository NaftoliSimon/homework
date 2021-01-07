import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './App.css';

export default function Posts() {
    const [posts, setPosts] = useState();
    let { blogId } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${blogId}`);
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                }
                const posts = await response.json();
                setPosts(posts);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [blogId]);

    if (!posts) {
        return null;
    }

    return (
        <div>
            <h2>TODO: name </h2> 
            {posts.map((post) => <div>
                    <li key={post.id}><h4>{post.name}</h4></li>
                    <li>{post.body}</li>
                   
                </div>)}
        </div>
    )
}
