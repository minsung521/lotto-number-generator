import BackGround from "./assets/background.svg";
import "./App.css";
import ProcessContainer from "./ProcessContainer";

const App = () => {
	return (
		<div className="App">
			<img src={BackGround} className="App-background" alt="" />
			<div className="title-container">
				<h1>로또 번호 생성기</h1>
			</div>
			<ProcessContainer />
			<p id="about-service-license">
				Copyleft © mingsung. All rights doesn't reserved.
			</p>
		</div>
	);
};

export default App;
