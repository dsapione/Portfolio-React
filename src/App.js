import './App.css';
import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import HomeNav from './components/homenav';
import Nav from './components/nav';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {

  return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<><Home/><HomeNav/></>}/>
				<Route path='/about' element={<><About/><Nav/></>}/>
				<Route path='/skills' element={<Skills/>}/>
				<Route path='/projects' element={<Projects/>}/>
				<Route path='/contact' element={<Contact/>}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
