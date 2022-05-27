export const racha = (array) => {
	let rachas = 0;

	for (let i = array.length - 1; i > 0; i--) {
		if(!array[i].isSessionCompleted) {
			break;
		} else {
			rachas++;
		}
	}

	return rachas;
};

export const maxRachas = (array) => {
	let rachas = 0;
	let maxRachas = 0

	for (let i = array.length - 1; i > 0; i--) {
		if(!array[i].isSessionCompleted) {
			if(rachas > maxRachas) {
				maxRachas = rachas;
			}
			rachas = 0;
		} else {
			rachas++;
		}
	}
	return maxRachas;
}

export const parseData = (array) => {
	const seen = {};
	array.forEach(item => {
		let currentValue = seen[item.dateSession];
		  
		if (!currentValue) {
			seen[item.dateSession] = { ...item }
		}
		
		if(currentValue && item.isSessionCompleted !== currentValue.isSessionCompleted && !item.isSessionCompleted) {
			seen[item.dateSession] = { ...item }
		}
	});
	return Object.values(seen);
}