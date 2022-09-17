import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar'
import Services from './Services';

const publicRoute = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/about', name: 'About', Component: About },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/login', name: 'Login', Component: Login },
]
function App() {

  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />}></Route>)
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
