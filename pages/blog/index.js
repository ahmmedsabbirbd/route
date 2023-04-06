// import Post from '@/components/Post/Post';
// import axios from 'axios';
// import Head from 'next/head';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// const index = () => {
//     const [posts, setPosts] = useState([]);

//     useEffect(()=> {
//         getPosts();
//     }, []);

//     const getPosts = async ()=> {
//         await axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(function (response) {
//             setPosts(response.data);
//         })
//     }

//     return (
//         <div>
//             <Head>
//                 <title>Blog Page</title>
//             </Head>
//             nested blog
//             <Link href="/">Home</Link>

//             {
//               posts &&  posts.map((p)=> <Post post={p} key={p.id} />)
//             }

//         </div>
//     );
// };

// export default index;

import Post from '@/components/Post/Post';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const index = ({posts}) => {
    console.log(posts);


    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            nested blog
            <Link href="/">Home</Link>

            {
              posts &&  posts.map((p)=> <Post post={p} key={p.id} />)
            }
        </div>
    );
};

export default index;


export const getStaticProps = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

    return {
        props: {
            posts: response.data
        }
    }
}