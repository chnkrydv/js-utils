const { docs, funnels } = require('./filter-test-data');

let checkedFunnels = {
  speciality: [1],
  exp: [2,3],
  location:[0,2]
};

const filter = (list, funnels, checkedFunnels) => {
  let filteredList = list;

  Object.keys(checkedFunnels).forEach(key => {
    if (!checkedFunnels[key].length)
      return;    
    
    filteredList = filteredList.filter(item => {
      return checkedFunnels[key].some(index => {
        if (typeof funnels[key][index] === 'object')
          return item[key] >= funnels[key][index]['lower']
            && item[key] <= funnels[key][index]['upper']
        return item[key] === funnels[key][index];
      });
    }); 
  });

  return filteredList;
};

console.log(filter(docs, funnels, checkedFunnels))

module.exports = filter;