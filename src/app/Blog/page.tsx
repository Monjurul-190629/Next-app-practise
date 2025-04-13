import Link from 'next/link';
import React from 'react';

const page: React.FC = async () => {
    const data = await fetch('https://api.vercel.app/blog');
    const posts = await data.json();
    const newPosts = posts.slice(0, 5);
    return (
        <div>
            Blog : {posts.length}
            {
                newPosts.map(post => <li key={post.id}>
                    <Link href ={`/Blog/${post.id}`}>{post.title}</Link>
                </li>)
            }
        </div>
    );
};

export default page;