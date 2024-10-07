// import axiosInstance from '../httpInterceptor';

const USER_KEY = 'user';

const getUser = (): User | null => {
  const cacheUser = localStorage.getItem(USER_KEY);
  return cacheUser ? JSON.parse(cacheUser) : null;
};

const setUser = (user: User) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

const isAuthenticated = (): boolean => {
  return getUser() !== null;
};

const logout = (): void => {
  localStorage.removeItem(USER_KEY);
};

const UserService = {
  getUser,
  setUser,
  isAuthenticated,
  logout,
}

export default UserService;

interface User {
  id: number;
  email: string;
  username: string;
}
