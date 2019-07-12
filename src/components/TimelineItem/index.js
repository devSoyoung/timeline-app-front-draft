import React from 'react';
import './TimelineItem.css';

// TODO: text, image 타입 컨텐츠에 대한 처리 분기
function TimelineItem({ author, thumbnail, lastEditTime, contentType, contents, comments }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item-info">
        <img className="author-thumbnail" alt="user thumbnail" src={thumbnail} />
        <p className="author-name">{author}</p>
        <p className="timeline-item-datetime">{lastEditTime}</p>
      </div>
      <div className="timeline-item-contents">
        { contentType === 'text' && <p className="text-contents">{contents}</p>}
      </div>
      <div className="timeline-item-comments">
        <ul>
          {comments.map(comment => <li>{comment}</li>)}
        </ul>
        <div>댓글을 다는 곳</div>
      </div>
    </div>
  );
}

export default TimelineItem;