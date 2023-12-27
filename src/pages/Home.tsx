import Rounds from "../components/Rounds";
import Results from "../components/Results";
import Stage from "../components/Stage";
import { useEffect, useState } from "react";

const Home = () => {
	const [rounds, setRounds] = useState<number>(5);
	console.log(rounds);

	interface points {
		player: number;
		computer: number;
	}

	const [pChoice, setPChoice] = useState<points>({ player: 0, computer: 0 });
	console.log(pChoice);

	const [resultPP, setResultPP] = useState<number>(0);
	const [resultPC, setResultPC] = useState<number>(0);

	const [playedRounds, setPlayedRounds] = useState<number>(0);

	useEffect(() => {
		setPlayedRounds(playedRounds + 1);
		console.log(playedRounds);
		if (rounds >= playedRounds) {
			const resultString: string =
				pChoice.player.toString() + pChoice.computer.toString();
			switch (resultString) {
				case "00":
					break;
				case "01":
					setResultPC(resultPC + 1);

					break;
				case "02":
					setResultPP(resultPP + 1);
					break;
				case "10":
					setResultPP(resultPP + 1);
					break;
				case "11":
					break;
				case "12":
					setResultPC(resultPC + 1);
					break;
				case "20":
					setResultPC(resultPC + 1);
					break;
				case "21":
					setResultPP(resultPP + 1);
					break;
				case "22":
					break;

				default:
					break;
			}
		} else {
			if (resultPC > resultPP) {
				window.alert("Computer Wins");
			} else if (resultPC < resultPP) {
				window.alert("You Win");
			} else if (resultPC === resultPP) {
				window.alert("Draw, let's play another round");
			}
		}
	}, [pChoice]);

	return (
		<main>
			<Rounds
				rounds={rounds}
				setRounds={setRounds}
			/>
			<Results
				pChoice={pChoice}
				setPChoice={setPChoice}
				resultPP={resultPP}
				resultPC={resultPC}
			/>
			<Stage
				pChoice={pChoice}
				setPChoice={setPChoice}
			/>
		</main>
	);
};

export default Home;
