import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/homePage'
import TodoList from './pages/todoListPage';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
