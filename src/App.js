import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAllStudent from './components/ViewAllStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudent/>}></Route>
      <Route path='/search' element={<Search/>}></Route>
      <Route path='/delete' element={<Delete/>}></Route>
      <Route path='/viewallstudent' element={<ViewAllStudent/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
