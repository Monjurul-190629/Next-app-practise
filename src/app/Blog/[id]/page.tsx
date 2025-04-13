import getPostById from '@/app/lib/getPostById';
import React from 'react';

export async function generateMetadata({params}) {
    const { id } = params;
    const post = await getPostById(id);
    
    return {
        title: post.author,
        description: post.title,
}
}



const page = async ({ params }) => {
    const { id } = params;
    const post = await getPostById(id);
    return (
        <div>
            The blog id : {id} <br />
            Blog title : {post.title} <br />
            Blog author : {post.author}
        </div>
    );
};

export default page;