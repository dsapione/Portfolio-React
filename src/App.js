import './App.css';
import { React, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';
// import About from './components/about';
// import Skills from './components/skills';
// import Projects from './components/projects';

function App() {

	const [selectedItem, setSelectedItem] = useState("MENU");

  return (
		<>
			<Home/>
			<Nav selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
			{/* <Routes> */}
				{/* <Route path='/about' element={<About/>}/> */}
				{/* <Route path='/skills' element={<Skills/>}/> */}
				{/* <Route path='/projects' element={<Projects/>}/> */}
			{/* </Routes> */}
		</>
  );
}

export default App;
