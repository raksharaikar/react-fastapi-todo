import React from "react";
import Content from "./Content";
import Header from "./Header";




function Dashboard(props) {
  return (
    <>
      <Header token={props.token} setToken={props.setToken}/>
      <Content />

      
    </>
  );
}

export default Dashboard;
