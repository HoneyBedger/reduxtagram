import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

const Main = (props) => {
  return (
    <React.Fragment>
      <div>
        <h1>
          <Link to="/">Reduxtagram</Link>
        </h1>
      </div>
      <Route exact path="/" render={() => <PhotoGrid {...props} />}/>
      <Route path="/view/:postId"
        render={({match}) => <Single {...props} postId={match.params.postId}/>}/>
    </React.Fragment>
  );
};

export default Main;
