import NavBar from "./components/NavBar";
import DataTable from "./container/DataTable"
import { WebSocketDemo } from "./container/WebSocketDemo";
// import SignIn from "./components/SigninExample"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
	// let { WSmessage, sendData } = WebSocketState() ; 

	return (
		<Router>
			<NavBar />
				{/* <Route path="/" element={<MainPage />} /> */}
				<Routes>
					<Route path="/table" element={<DataTable />} />
					<Route path="/testing" element={<WebSocketDemo />} />
				</Routes>
				{/* <SignIn /> */}
				{/* <WebSocketDemo /> */}
		</Router>
	);
}

export default App;
