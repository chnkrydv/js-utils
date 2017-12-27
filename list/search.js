const search = (list, searchables, queryString) => {
  
  let matchedItemsList = list.filter(item => {
    return searchables.some(searchableField => {
      return item[searchableField].toLowerCase().includes(queryString.toLowerCase());
    });
  });

  return matchedItemsList;
}

module.exports = search;