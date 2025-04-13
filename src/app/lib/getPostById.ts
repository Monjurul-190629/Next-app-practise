


export default async function getPostById(id){
    const result = await fetch(`https://api.vercel.app/blog/${id}`);
    
    if(!result.ok){
        throw new Error("there was a fetching error")
    }
    const post = await result.json();
    return post;
}