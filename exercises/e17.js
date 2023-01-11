function maxOrMinBy(array, cb, arg) {
    let currentBestValue;
    if (arg === "min") currentBestValue = Number.MAX_VALUE;
    if (arg === "max") currentBestValue = Number.MIN_VALUE;
    let elementToReturn = array[0];
    for (const element of array) {
        const elementValue = cb(element);
        const thisElementBetter = 
            (arg === "min" && elementValue < currentBestValue) ||
            (arg === "max" && elementValue > currentBestValue);
        if (thisElementBetter) {
            currentBestValue = elementValue;
            elementToReturn = element;
        }
    }
    return elementToReturn;
}

export function minBy(array, cb) {
    return maxOrMinBy(array, cb, "min");
}

export function maxBy(array, cb) {
    return maxOrMinBy(array, cb, "max");
}
