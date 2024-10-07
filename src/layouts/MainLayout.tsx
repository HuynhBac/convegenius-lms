import React from 'react';
import MainMenu from '../pages/main-menu/MainMenu';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home-page/HomePage';
import ProgramList from '../pages/program-pages/ProgramList';
import StudentList from '../pages/student-pages/StudentList';

const MainLayout = () => {
  return (
    <div>
      <MainMenu></MainMenu>
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='/program-list' element={<ProgramList />}></Route>
        <Route path='/student-list' element={<StudentList />}></Route>
        <Route path='*' element={<HomePage />} />
      </Routes>
      <Outlet />
    </div>
  );
};

export default MainLayout;
