import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BasicExample from './components/navBar/NavBar';
import Home from './pages/homePage'
import Login from './pages/logInPage';
import Signup from './pages/signUpPage';
import TodoList from './pages/todoListPage';



function App() {
  return (
    <div>
      <BasicExample />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<TodoList />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
