import MainPage from "./routes/MainPage";
import NavBar from "./components/NavBar";
import DataTable from "./routes/DataTable"
import GUI from "./routes/GUI"
import PlayGround from "./routes/PlayGround";
// import SignIn from "./components/SigninExample"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
	// let { WSmessage, sendData } = WebSocketState() ; 
 
	return (
		<Router>
			<NavBar />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/table" element={<DataTable />} />
					<Route path="/playground" element={<PlayGround />} />
					<Route path="/GUI" element={<GUI />} />
				</Routes>
		</Router>
	);
}

export default App;
