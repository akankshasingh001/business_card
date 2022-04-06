import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetails from './CommentDetails';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails
        img={faker.image.image()}
        userName={faker.name.firstName()}
        company={faker.company.companyName()}
        info={faker.address.streetAddress()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
