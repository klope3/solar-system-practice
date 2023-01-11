// see e16.md

export function find(array, callback) {
    for (const element of array) {
        if (callback(element)) {
            return element;
        }
    }
}
