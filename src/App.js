import BackGround from "./assets/background.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<img src={BackGround} className="App-background" />
			<h1>로또 번호 생성기</h1>
			<div className="process-container"></div>
		</div>
	);
}

export default App;
