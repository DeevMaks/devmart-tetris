function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function arrayClone(arr) {
	var i, copy;

	if (Array.isArray(arr)) {
		copy = arr.slice(0);
		for (i = 0; i < copy.length; i++) {
			copy[i] = arrayClone(copy[i]);
		}
        return copy;

	} else if(typeof arr === 'object') {
		throw 'Cannot clone array containing an object!';
	} else {
		return arr;
	}
}

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

export { timeout, arrayClone, randomInteger };
