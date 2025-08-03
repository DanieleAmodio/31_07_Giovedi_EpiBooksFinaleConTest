import React, { useContext } from 'react';
import SingleComment from './SingleComment';
import { useTheme } from '../context/contextTheme';



function CommentList ({comments,  onEditOrDeleteComment }) {
    const {colorText}= useTheme();
    return (
        <div>
            <h3 className={colorText}>Commenti</h3>
            {comments.map(comment => (
                <SingleComment key={comment._id} comment={comment} onEditOrDeleteComment={onEditOrDeleteComment} colorText={colorText} />
            ))}
        </div>
    );
};
export default CommentList;