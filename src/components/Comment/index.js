import React, { Component } from 'react';
import './style.scss';

export default function Comment({ comments }) {

    return (
        <div className="comments">
            <div className="container">
                {comments.map((comment) => (
                    <div key={comment.id} className="block-flex">
                        <img className="avatar" src={comment.author.avatar} />
                        <div className='comment-content'>
                            <p>
                                <span>
                                    {comment.author.name}
                                </span>
                                {comment.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}