import React from 'react';

const BlogDetail = ({blog}) => {
    const {question, answer} = blog;
    return (
        <div className='mb-5 border-2 py-2 px-2 rounded'>
            <h3 className='font-semibold text-rose-400'>Question: {question}</h3>
            <p><span className='font-semibold text-blue-700'>Answer:</span> {answer}</p>
        </div>
    );
};

export default BlogDetail;