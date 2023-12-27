import "./Results.scss";

const Results = ({ pChoice, setPChoice, resultPC, resultPP }) => {
	return (
		<section className='results'>
			<article>
				<p>
					{pChoice.computer === 0
						? "🤜"
						: pChoice.computer === 1
						? "🖐️"
						: pChoice.computer === 2
						? "✌️"
						: ""}
				</p>
				<p>
					{" "}
					{pChoice.player === 0
						? "🤜"
						: pChoice.player === 1
						? "🖐️"
						: pChoice.player === 2
						? "✌️"
						: ""}
				</p>
			</article>
			<article>
				<p>com :</p>
				<div>{resultPC}</div>
				<div>{resultPP}</div>
				<p>: Player</p>
			</article>
		</section>
	);
};

export default Results;
