import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './compoonents/header/header'
import Greet from './compoonents/header/Greet'
import Welcome from './compoonents/header/Welcome'
import Message from './compoonents/header/Message'
import Counter from './compoonents/Counter'
import FunctionClick from './compoonents/header/FunctionClick'
import Classclick from './compoonents/header/Classclick'
import EventBinding from './compoonents/header/EventBinding'
import MethodasProps from './compoonents/MethodasProps'
import List from './compoonents/List'
import FormHandler from './compoonents/FormHandler'
import LifecycleA from './compoonents/LifecycleA'
import FragmentDemo from './compoonents/header/Fragment'
import TableDemo from './compoonents/header/Table'
// import ParentComp from './compoonents/ParentComp'
// import Refsdemo from './compoonents/Refsdemo'
// import FocusInput from './compoonents/FocusInput'
import NewParentRefForwaring from './compoonents/ParentComp'
import Portals from './compoonents/Portals/Portals'
import ErrorCom from './compoonents/errorboundary/error'
import ErrorBoundary from './compoonents/errorboundary/ErrorBoundary'
import IncCounter from './compoonents/HighOrderComponents/Counter'
import Hover from './compoonents/HighOrderComponents/Hover'
import ClickCounter from './compoonents/RenderPropsPattern/ClickCounter'
import Counter2 from './compoonents/RenderPropsPattern/Counter2'

const showregform="Test";
function App() {
  return (
    <div className="App">  
    <ClickCounter/>
    <Counter2/>
    {/* <IncCounter></IncCounter> */}
    {/* <Hover name="Suresh"/> */}
    {/* <ErrorBoundary>
    <ErrorCom heroname="Suresh"></ErrorCom>
    <ErrorCom heroname='Test'></ErrorCom>
    </ErrorBoundary> */}
    {/* <Portals></Portals> */}
    {/* <NewParentRefForwaring/> */}
     {/* <FocusInput></FocusInput> */}
    {/* <Refsdemo></Refsdemo> */}
    {/* <ParentComp></ParentComp>    */}
      {/* <Header showForm={showregform}></Header>    */}
      {/* <TableDemo></TableDemo> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <LifecycleA></LifecycleA> */}
      {/* <Greet name="Hirecraft" establishment="2003"><p>HRMS Application</p></Greet> */}
      {/* <MethodasProps></MethodasProps> */}
      {/* <FormHandler></FormHandler> */}
      {/* <List></List> */}
      {/* <EventBinding /> */}
      {/* <Classclick/> */}
      {/* <Greet name="Job raiser" establishment="2017"><p>Job Posting Application</p></Greet> */}
      {/* <Greet name="Talent micro" establishment="2018"><p>HRMS New Version alpha stage</p></Greet> */}
      <hr></hr>
      {/* <Welcome name="Hirecraft" establishment="2003"></Welcome> */}
      {/* <Message></Message>
       */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick> */}

    </div>
  );
}

export default App;
