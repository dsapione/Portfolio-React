import './App.css';
import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {

  return (
		<BrowserRouter>
			<Home/>
			<Nav/>
			<Routes>
				<Route path='/about' element={<About/>}/>
				<Route path='/skills' element={<Skills/>}/>
				<Route path='/projects' element={<Projects/>}/>
				<Route path='/contact' element={<Contact/>}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
