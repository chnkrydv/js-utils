const range = (list, field) => {
  let allValues = [];

  list.map( item => {
    if(!(field in item))
      return;
    
    if(!allValues.includes(item[field])) allValues.push(item[field]);
  })

  return allValues;
}

module.exports = range;