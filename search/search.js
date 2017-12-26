const search = (list, searchables, queryString) => {
  let matchingItemsList = list;

  matchingItemsList.filter( item => {
    return searchables.some( searchableField => {
      item[searchableField].includes(queryString);
    });
  });

  return matchingItemsList;
}

module.exports = search;