import MainPage from "./container/MainPage";
import NavBar from "./components/NavBar";
import DataTable from "./container/DataTable"
import GUI from "./container/GUI"
import { WebSocketDemo } from "./container/WebSocketDemo";
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
					<Route path="/playground" element={<WebSocketDemo />} />
					<Route path="/GUI" element={<GUI />} />
				</Routes>
				{/* <SignIn /> */}
				{/* <WebSocketDemo /> */}
		</Router>
	);
}

export default App;
