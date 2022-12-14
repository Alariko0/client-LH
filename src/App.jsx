import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import Home from './pages/homePage';
import Login from './pages/logInPage';
import Signup from './pages/signUpPage';
import TodoListCreate from './pages/todoListCreatePage';
import TodoList from './pages/todoListPage';
import TodoListUpdate from './pages/todoListUpdatePage';
import User from './pages/userPage';



function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lists' element={<TodoList />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/me' element={<User />} />
        <Route path='/create' element={<TodoListCreate />} />
        <Route path='/update/:id' element={<TodoListUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
