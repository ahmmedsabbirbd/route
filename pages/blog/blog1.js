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
                 
            <Image src="/tk.jpg" width="120" height="120" alt="tk"></Image> 
            <h1 className="text-3xl font-bold underline">blog 1 </h1>

            <label htmlFor="my-modal-6" className="btn">open modal</label>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">Yay!</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default blog1;