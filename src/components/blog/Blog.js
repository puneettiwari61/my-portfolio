import React from 'react';
import Card from './../work/Card'
export default function Blog() {
  return (<div className='blog'>
          <Card h1='Map and Set in Javascript' ad='https://link.medium.com/uJG0QDyPW2' />
          <Card h1='Destructuring in JavaScript' ad='https://link.medium.com/OcCQOABPW2' />
          <Card h1='String Methods and Properties in JavaScript' ad='https://link.medium.com/VqsoR6SKV2' />
          <Card h1='Fully Functional Todo App with Vanilla js' ad='https://link.medium.com/3YI907EPW2' />
          <Card h1='Array, NodeList and HTML Collection' ad='https://link.medium.com/MWAlS1uPW2' />
          <Card h1='Rest Parameters and Spread Operator' ad='https://link.medium.com/L7cMIJoUT2' />
          </div>
  );
}
