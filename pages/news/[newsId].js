import { useRouter } from "next/router";

const newsId = () => {
    const router = useRouter();
    console.log(router.query.newsId);

    return (
        <div>
            your dynamic link {router.query.newsId}
        </div>
    );
};

export default newsId;