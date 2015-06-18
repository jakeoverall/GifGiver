var api = {
  getData: function(tag) {
    var url = `http://gifbase.com/tag/${tag}?format=json`;
    return fetch(url).then(function(response){
      return response.json();
    });
  }
}

module.exports = api;