import "./Stage.scss";

const Stage = ({ pChoice, setPChoice }) => {
	return (
		<section className='stage'>
			<div>
				<p
					onClick={() =>
						setPChoice({
							player: 0,
							computer: Math.floor(Math.random() * 3),
						})
					}>
					🤜
				</p>
				<p
					onClick={() =>
						setPChoice({
							player: 1,
							computer: Math.floor(Math.random() * 3),
						})
					}>
					🫴
				</p>
				<p
					onClick={() =>
						setPChoice({
							player: 2,
							computer: Math.floor(Math.random() * 3),
						})
					}>
					✌️
				</p>
			</div>
			<button onClick={() => window.location.reload()}>reset</button>
		</section>
	);
};

export default Stage;
