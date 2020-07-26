export const customMiddleWare = store => next => action => {
    if(action.type == 'DATA_GET_ALL'){
      fetch(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        next({
          type: "ADD_DATA",
          payload: data
        })
      })
      .catch(function(error) {
        console.log('Request failed', error)
      });
    }
      next(action);
  }