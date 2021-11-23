import BackGround from "./assets/background.svg";
import "./App.css";
import ProcessContainer from "./ProcessContainer";

const App = () => {
	return (
		<div className="App">
			<img src={BackGround} className="App-background" alt="" />
			<h1>로또 번호 생성기</h1>
			<ProcessContainer />
		</div>
	);
};

export default App;
