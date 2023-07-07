
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import page404 from './Component/page404';
import User from './Component/User';
import Login from './Component/Login';
import Protected from './Component/Protected';
import Api from './Component/Api';




import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Post from './Component/Post';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={< Protected Component={Home} />} />
          <Route path='/Post' element={< Post />} />
          {/* <Route path='/About' element={<Protected Component={About}/>} /> */}
          <Route path='/Login' element={<Login />} />
          <Route path='/Api' element={<Api />} />
          <Route path='/User/:name' element={<Protected Component={User} />} />
          <Route path='/*' element={<Protected Component={Home} />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App;
