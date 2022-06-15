import React from 'react';

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.image()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Nate
                </a>
                <div className="metadata">
                    <span className="date">Today at 7:00PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    );
}