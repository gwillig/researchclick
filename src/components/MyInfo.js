import React from 'react';


class MyInfo extends React.Component {
    test(){
      console.log("hello")
    }
    render() {
      return <h1 onClick={test1}>Hello</h1>;
    }
  }

  function test1(){
    console.log("hello")
  }
export default MyInfo;
