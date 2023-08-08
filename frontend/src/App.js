import MainPage from "./routes/MainPage";
import NavBar from "./components/NavBar";
import DataTable from "./routes/DataTable"
import GUI from "./routes/GUI"
import PlayGround from "./routes/PlayGround";
import Accumulator from "./routes/Accumulator"
// import SignIn from "./components/SigninExample"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { GUIProvider } from "./routes/hooks/useGUI"

function App() {
	// let { WSmessage, sendData } = WebSocketState() ; 
 
	return (
		<Router>
			<NavBar />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/table" element={<DataTable />} />
					<Route path="/playground" element={<PlayGround />} />
					<Route path="/GUI" element={<GUIProvider><GUI /></GUIProvider> } />
					<Route path="/accumulator" element={<Accumulator />} />
				</Routes>
		</Router>
	);
}

export default App;
