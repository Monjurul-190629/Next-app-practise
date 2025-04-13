import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import img from '../../../public/globe.svg';

const page: React.FC = async () => {
    const data = await fetch('https://api.vercel.app/blog',{
        next: { revalidate: 20 }, // Revalidate every 60 seconds
      });
    const posts = await data.json();

    
    const newPosts = posts.slice(0, 5);
    return (
        <div>
            Blog : {posts.length}
            {
                newPosts.map(post => <li key={post.id}>
                    <Link href={`/Blog/${post.id}`}>{post.title}</Link>
                </li>)
            }
            <div className='w-[450px] my-10'>
                <Image className='w-[250px]' src={img} alt="window image" />
            </div>
        </div>
    );
};

export default page;