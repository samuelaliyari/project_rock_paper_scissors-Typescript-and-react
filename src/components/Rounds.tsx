import "./Rounds.scss";

const Rounds = ({ rounds, setRounds }) => {
	return (
		<section className='rounds'>
			<h2>How many Rounds whoud you want to play?</h2>
			<p>{rounds}</p>
			<form>
				<input
					type='range'
					name=''
					id=''
					min={5}
					max={50}
					step={1}
					defaultValue={5}
					onChange={(e) => setRounds(Number(e.target.value))}
				/>
			</form>
		</section>
	);
};

export default Rounds;
