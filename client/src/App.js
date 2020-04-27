import React, { useRef, useState } from 'react';
import './App.css';
import Searchbox from './Components/searchbox';
import Dashboard from './Components/dashboard';
import Header from './Components/header';
function App(props) {
  const dashboardRef = useRef();
  let [ispList, setIspList] = useState([]);
  const inputHandler = (searchValue) => {
    dashboardRef.current.inputHandler(searchValue);
  }
  const setISPData = (data) => {
    setIspList(data);
  }
  return (
    <div className="App">
      <Header totalISP={ispList.length} />
      <Searchbox searchInputHandler={(event) => inputHandler(event)} ispList={ispList} />
      <div className="dashboardClass">
        <Dashboard ref={dashboardRef} setISPData={setISPData} />
      </div>
    </div>
  );
}

export default App;
