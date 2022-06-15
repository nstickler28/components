import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Nate"
                time="Today at 4:40PM"
                comment="Hey"
                avatar={faker.image.image()}
            />
            <CommentDetail
                author="Alex"
                time="Today at 8:30PM"
                comment="Yooo"
                avatar={faker.image.image()}
            />
            <CommentDetail
                author="Brendan"
                time="Yesterday at 2:00PM"
                comment="How's it goin?"
                avatar={faker.image.image()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))