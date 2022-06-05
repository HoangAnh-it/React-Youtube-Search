import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import logo from '../logo.svg';
import '../styles/App.scss';
import Nav from './Nav';
import Home from './Home';
import Search from './Search';
import NotFound from './Notfound';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
            <Routes>
              <Route path="/" exact element={<Home/>}></Route>
              <Route path="/search" element={<Search/>}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
