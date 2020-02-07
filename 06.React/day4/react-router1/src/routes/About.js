import React from 'react';
// this.props.match 
const About = ({match}) => {
  return (
    <div>
      {match.params.userid}'s Profile
    </div>
  );
};

export default About;