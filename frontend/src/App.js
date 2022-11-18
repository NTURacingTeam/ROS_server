import DataTable from "./components/DataTable"
import WebSocketState from './components/WebSocketState';

function App() {
	// let { WSmessage, sendData } = WebSocketState() ; 

	return (
		<div className="App">
			<h1> NTU Racing team remote monitor (ctower) </h1>
			<DataTable />
			<WebSocketState />
		</div>
	);
}

export default App;
