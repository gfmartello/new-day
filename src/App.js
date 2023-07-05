import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Page from './pages/Page';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Page />} />
        </Routes>
        <Link to='https://www.zocdoc.com/practice/new-day-mental-health-75644?lock=true&isNewPatient=false&referrerType=widget'>
          <button className='main__btn'>Book Online</button>
        </Link>
      </BrowserRouter>
    </div>
  );
}

export default App;