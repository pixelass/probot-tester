export function hello(name = "World") {
	const date = new Date();
	const day = date.getDay();
	const days = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
	return `Hello ${name}, today is ${days[day]}!`;
}

export function bye(name = "World") {
	return "Good bye ${name}, hope to see you soon.";
}

export function shakeHand(name) {
	return `shaking hands with ${name}`;
}
