import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard >
                <CommentDetail
                    author="Nate"
                    time="Today at 4:40PM"
                    comment="Hey"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    author="Alex"
                    time="Today at 8:30PM"
                    comment="Yooo"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    author="Brendan"
                    time="Yesterday at 2:00PM"
                    comment="How's it goin?"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))