import DataTable from "./components/DataTable"
import { WebSocketDemo } from "./components/WebSocketDemo";
// import SignIn from "./components/SigninExample"

function App() {
	// let { WSmessage, sendData } = WebSocketState() ; 

	return (
		<div className="App">
			<h1> NTU Racing team remote monitor (ctower) </h1>
			<DataTable />
			{/* <SignIn /> */}
			<WebSocketDemo />
		</div>
	);
}

export default App;
