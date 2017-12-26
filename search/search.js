const search = (list, searchables, queryString) => {
  let matchingItemsList = list;

  matchingItemsList = matchingItemsList.filter( item => {
    let match = searchables.some(searchableField => {
      return item[searchableField].toLowerCase().includes(queryString);
    });
    
    return match;
  });

  return matchingItemsList;
}

module.exports = search;