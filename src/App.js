//import logo from './logo.svg';
import './App.css';
import React,{ Suspense} from "react";
import { Route,Routes } from 'react-router';


const Navbar =React.lazy(() => import ("./collection/Navbar"));
const Home = React.lazy(() =>import ("./collection/Home"))
const Produce = React.lazy(() =>import('./collection/Produce'));
const Blog = React.lazy(() =>import('./collection/Blog'));
const About = React.lazy(() =>import('./collection/About'));
const Portfolio = React.lazy(() =>import('./collection/Portfolio'));
const Contact = React.lazy(() =>import('./collection/Contact'));

function App() {
  return (
<>
<Navbar/>
<Suspense fallback ={<div>Loading... please wait</div>}>
<Routes>
  <Route>
    <Route path="/" element={<Home/>} />
    <Route path="produce" element={<Produce/>} />
    <Route path="blog" element={<Blog/>} />
    <Route path="about" element={<About/>} />
    <Route path="porfolio" element={<Portfolio/>} />
    <Route path="contact" element={<Contact/>} />
  </Route>
  </Routes>
  </Suspense>
</>
  );
}

export default App;
