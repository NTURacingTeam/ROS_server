import MainPage from "./container/MainPage";
import NavBar from "./components/NavBar";
import DataTable from "./container/DataTable"
import GUI from "./container/GUI"
import PlayGround from "./container/PlayGround";
// import SignIn from "./components/SigninExample"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
