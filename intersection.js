function intersection(set1, set2) {
    return new Set([...set1].filter(x => set2.has(x)));
} 

module.exports = intersection