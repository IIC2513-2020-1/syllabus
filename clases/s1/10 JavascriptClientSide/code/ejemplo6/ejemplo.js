document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('button');
  button.onclick = function() {
    var randomPostId = Math.floor((Math.random() * 100) + 1);
    fetch('https://jsonplaceholder.typicode.com/posts/' + randomPostId)
      .then(response => response.json())
      .then((jsonData) => {
        document.getElementById('loaded-title').innerHTML = jsonData.title;
        document.getElementById('loaded-body').innerHTML = jsonData.body;
      });
  }
});
