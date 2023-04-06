import Head from "next/head";
import Image from "next/image";

const blog1 = () => {
    return (
        <div>
            <Head>
                <title>Blog 1</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <meta name="description" content="website description"/>
                <meta name="keyword" content="website description"/>
                <meta name="authot" content="Sabbir ahmmed"/>
                
                <meta property="og:site_name" content="Sabbir Ahmmed"/>
                <meta property="og:url" content="sabbir.com" />
                <meta property="og:title" content="Sabbir Ahmmed" />
                <meta property="og:description" content="website description" />
                <meta property="og:image" content="./tk.jpg" />

                <meta http-equiv="cache-control"  content="no-cache" />
                <meta http-equiv="expires"  content="0" />
                <meta http-equiv="pragma"  content="no-cache" />
            </Head>
            blog 1       
            <Image src="/tk.jpg" width="120" height="120"></Image> 
        </div>
    );
};

export default blog1;