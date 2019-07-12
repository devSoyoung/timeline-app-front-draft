import React from 'react';
import TimelineItem from '../../components/TimelineItem';
import './Timeline.css';
import thumbnail from '../../static/images/icon.jpg';

const mockData = [
  {
    author: 'John Doe',
    thumbnail,
    lastEditTime: '2019-03-29 PM 12:23',
    contentType: 'text',
    contents: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    comments: [],
  }
];

function Index() {
  return (
    <div className="timeline">
      <div className="section-timeline">
        {mockData.map((mock, idx) => <TimelineItem key={`timelineItem_${idx}`} {...mock} />)}
      </div>
      <div className="section-friends">여기는 친구목록</div>
    </div>
  );
}

export default Index;