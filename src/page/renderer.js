const button = document.getElementById('btn');
const titleInput = document.getElementById('title');

button.addEventListener('click', event => {
  const title = titleInput.value;

  window.eletronAPI.setTitle(title);
  console.log(window.eletronAPI);
})