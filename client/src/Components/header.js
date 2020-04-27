import React, { useState, useEffect } from 'react';

function Header(props) {

    let [storage,setStorage] = useState(0);
    useEffect(()=>{
        setStorage(localStorage.getItem('apiHits'));
    },
    [storage]);

    return (
        <div>
            <div className="title">ISP HackerEarth - searching ISP made easy</div>
            <div>
                Total ISP : {props.totalISP} | API Hits : {storage}
            </div>
        </div>
    )
}

export default Header;