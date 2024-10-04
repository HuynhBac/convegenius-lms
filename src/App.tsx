import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import HomePage from './pages/home-page/HomePage';
import LoginRoute from './protected-routes/LoginRoute';
import AuthRoute from './protected-routes/AuthRoute';
import PermissionRoute from './protected-routes/PermissionRoute';
import { Theme as RadixTheme } from "@radix-ui/themes";
import './GlobalStyles.scss';
import ThemeSelection from './ThemeSelection';

function App() {

  // prettier-ignore
  return (
    <div>
      <RadixTheme>
      <ThemeSelection/>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginRoute><LoginPage/></LoginRoute>}></Route>
          <Route element={<AuthRoute />}>
            <Route path='/' element={<PermissionRoute permissionName=''><HomePage/></PermissionRoute> }/>
            <Route path='*' element={<HomePage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      </RadixTheme>
    </div>
  );
}

export default App;
