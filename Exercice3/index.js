const calculateAverage = (array) => {
  return Array.isArray(array) && array.length > 0
    ? array.reduce((sum, num) => sum + num, 0) / array.length
    : "No numbers to calculate average";
};

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
