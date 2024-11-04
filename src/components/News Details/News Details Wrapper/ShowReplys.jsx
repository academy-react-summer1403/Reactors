import React from 'react'
import NewsUserComment from '../NewsContainer/User Comment/UserComment';

const ReaplyCommentWrapper = ({ showReply }) => {
  return (
    <>
      <div>
        {showReply?.map((item) => {
          return <NewsUserComment key={item.id} showReply={item} />;
        })}
      </div>
    </>
  )
}

export default ReaplyCommentWrapper
