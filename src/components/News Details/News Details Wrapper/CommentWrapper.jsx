import React from 'react'
import NewsUserComment from '../NewsContainer/User Comment/UserComment';

const CommentWrapper = ({ newsComment }) => {
  return (
    <>
      <div>
        {newsComment?.map((item) => {
          return <NewsUserComment key={item.id} newsComment={item} />;
        })}
      </div>
    </>
  )
}

export default CommentWrapper
