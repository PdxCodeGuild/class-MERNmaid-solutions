import Animal from "./Animal";

const App = () => {
	const animals = [
		{
			species: "cat",
			description: "Better than you",
			selected: true,
		},
		{
			species: "dog",
			description: "Always happy",
			selected: false,
		},
		{
			species: "bird",
			description: "Government drone",
			selected: false,
		},
		{
			species: "llama",
			description: "Watch out, they spit!",
			selected: false,
		},
		{
			species: "dodo",
			description: "Dumb animal",
			selected: false,
		},
	];
	return (
		<div>
			<h1>Hello World</h1>
			{animals.map((animal) => (
				<Animal
					key={animal.species}
					species={animal.species}
					description={animal.description}
					selected={animal.selected}
				/>
			))}
		</div>
	);
};

export default App;
