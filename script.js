const quotes = [
	'Aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa aaaaa', 
	'Bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb bbbbb',
	'Ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ccccc ',
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote(){
	const randomIndex = Math.floor(Math.random() * quotes.length);
	console.log(randomIndex);
	const randomQuote = quotes[randomIndex];
	quoteElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomQuote);

// generateRandomQuote();