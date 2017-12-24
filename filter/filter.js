/// filter module definition

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

module.exports = filter;