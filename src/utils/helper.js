const calculateSum = (obj, field) => { 
    return obj.map(items => items[field])
              .reduce((prev, curr) => prev + curr, 0);
};

module.exports = {
  calculateSum
}