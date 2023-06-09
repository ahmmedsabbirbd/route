import React from 'react';

const Post = (props) => {
    const {title, body} = props.post;

    return (
        <div className="card mt-5 w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
                
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Post;