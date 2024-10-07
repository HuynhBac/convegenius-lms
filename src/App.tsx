import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/LoginPage';
import LoginRoute from './protected-routes/LoginRoute';
import AuthRoute from './protected-routes/AuthRoute';
import { Theme as RadixTheme } from '@radix-ui/themes';
import './GlobalStyles.scss';
import ThemeSelection from './ThemeSelection';
import MainLayout from './layouts/MainLayout';
import UserService from './services/UserService';

function App() {
  // prettier-ignore
  return (
    <div>
      <RadixTheme>
      {!UserService.getUser() && <ThemeSelection/>}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginRoute><LoginPage/></LoginRoute>}></Route>
          <Route element={<AuthRoute />}>
            <Route path='/' element={<MainLayout/>}/>
            <Route path='*' element={<MainLayout/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      </RadixTheme>
    </div>
  );
}

export default App;
