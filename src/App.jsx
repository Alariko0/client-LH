import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/homePage'
import Login from './pages/logInPage'
import Signup from './pages/signUpPage';
import TodoList from './pages/todoListPage';



function App() {
  return (
    <div>
      <Navbar />
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
