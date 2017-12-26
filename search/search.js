const search = (list, searchables, queryString) => {
  let matchingItemsList = list;

  matchingItemsList = matchingItemsList.filter( item => {
    return searchables.some(searchableField => {
      return item[searchableField].toLowerCase().includes(queryString);
    });
  });

  return matchingItemsList;
}

module.exports = search;