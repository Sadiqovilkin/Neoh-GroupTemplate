import React, { useState } from 'react';
import {Outlet} from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import Header from '../../components/Layout/Header/Header';
const ClientRoot = () => {
  const localID = JSON.parse(localStorage.getItem('userID'));
  const[localUserID, setLocalUserID] = useLocalStorage('userID', null);
  const [userID, setUserID] = useState(localID ? localID : null);
  return (
    <>
    <Header/>
    <Outlet  context={[setUserID, setLocalUserID]}/>
    </>
  )
}

export default ClientRoot