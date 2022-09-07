import * as React from 'react';
 
export default class TestComponent extends React.Component {
  render(){
    return <div id="testNode" data-testid="testNode">TestComponent</div>
  }
  sayHello(){
    console.log('Hello!');
  }
}