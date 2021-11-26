import React, { useState } from "react";
import "./ProcessContainer.css";
import lotto from "./data/lotto.json";
import NumBox from "./Numbox";

const ProcessContainer = () => {
	//1~880
	let startpoint = 1;
	const [BestNum, setBestNum] = useState({
		numbers: [],
	});
	let dum = [];

	const Shuffle = () => {
		//console.log(lotto[1][1]);
		startpoint = Math.floor(Math.random() * 888 + 1);
	};

	const ManyNum = () => {
		setBestNum({ numbers: [] });
		for (let j = 1; j <= 6; j++) {
			let CountArr = [];
			for (let i = startpoint; i < startpoint + 100; i++) {
				CountArr.push(lotto[i][j]);
			}
			// console.log(CountArr);
			let result = {};
			CountArr.forEach((x) => {
				result[x] = (result[x] || 0) + 1;
			});
			// console.log(result);
			let max = 0;
			for (let i = 1; i <= 45; i++) {
				if (result[i] && !dum.includes(result[i]))
					max = max < result[i] ? result[i] : max;
			}
			dum.push(max);
		}
		setBestNum({ numbers: [dum] });
		console.log(BestNum.numbers);
	};

	return (
		<div className="process-container">
			<div className="indicator">
				{/* {BestNum.numbers.map((cur, i) => {
					return <NumBox number={`${cur}`} />;
				})} */}
				<NumBox number={`${BestNum.numbers[0] || "번호 뽑기"}`} />
			</div>
			<div className="btns">
				<button className="btn" onClick={Shuffle}>
					섞기
				</button>
				<button className="btn" onClick={ManyNum}>
					뽑기
				</button>
			</div>
			<p id="about-service">
				위 <span id="point">로또 번호</span>는 1회 ~ 988회 까지의{" "}
				<a
					target="_blank"
					href="https://dhlottery.co.kr/gameResult.do?method=byWin"
				>
					나눔로또
				</a>{" "}
				당첨 데이터를 토대로 생성됩니다.
			</p>
		</div>
	);
};

export default ProcessContainer;
