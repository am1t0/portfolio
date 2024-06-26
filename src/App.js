import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <>
     <Routes  basename="/portfolio">
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/works' element={<Work/>}/>
        </Route>
     </Routes>
    </>
  );
}

export default App;
