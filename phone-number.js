function createPhoneNumber(arr) {
    first = '(010)';
    const numLength = arr.length;
    const middle = arr.slice(numLength - 8, numLength - 4).join('');
    const last = arr.slice(numLength - 4, numLength).join('');
  
    if (numLength === 11) {
      first = `(${arr.slice(0,3).join('')})`;
    }
  
    return `${first}${middle}-${last}`
    
  }