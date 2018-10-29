import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => {
  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => <Photo
        {...props} key={i} idx={i} post={post}/>)}
    </div>
  );
}

export default PhotoGrid;
