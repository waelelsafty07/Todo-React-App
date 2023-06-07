import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Todolist from './components/Todolist';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import NotMatch from './components/pages/NotMatches';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Todolist />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
