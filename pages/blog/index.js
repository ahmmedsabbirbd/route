import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            nested blog
            <Link href="/">Home</Link>
        </div>
    );
};

export default index;