import React from 'react';

const CommentDetails = props => {
  return (
    <div>
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={props.img} alt=""></img>
          </div>
          <div className="content">
            <div className="header">{props.userName}</div>
            <div className="meta">
              <a href="/">{props.company}</a>
            </div>
            <div className="description">{props.info}</div>
          </div>
          <div className="extra content">
            <span className="right floated">Joined in 2013</span>
            <span>
              <i className="user icon"></i>
              75 Friends
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetails;
