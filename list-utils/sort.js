const sort = (list, field, ascendingOrder) => {
  let asc = typeof ascendingOrder !== 'boolean' ? true : ascendingOrder;
  let pos = asc ? 1 : -1;
  let neg = asc ? -1 : 1;

  return list.sort( (a,b) => {
    return a[field] > b[field] ? pos : neg;
  });
}

module.exports = sort;