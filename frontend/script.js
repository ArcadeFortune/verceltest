document.getElementById('counterButton').addEventListener('click', () => {
  fetch('/counter', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
          document.getElementById('counterValue').innerText = data.counter;
      });
});
