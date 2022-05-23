import React from 'react'
import { createRoot } from 'react-dom/client';
import './style/home.css'
import Tablero from "./components/tablero/Tablero.jsx";
const App = () =>{
	return (
		<>
			<Tablero />
		</>
	);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
