
let input = document.getElementById('item-input');
let addBtn = document.getElementById('add-btn');
let list = document.getElementById('list');

addBtn.addEventListener('click', (e) => {
  e.preventDefault()
  addItemToList();
  input.focus()
}) 

function addItemToList() {
  let itemText = input.value;
  let listItem = document.createElement('li');
  listItem.textContent = itemText;
  
  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'Delete';
  
  // Add delete btn to list item
  listItem.appendChild(deleteBtn);
  
  deleteBtn.addEventListener('click', (e) => {
    // onclick - delete target (btn)'s parent element (list item)
    e.target.parentElement.remove();
    e.preventDefault();
    input.focus()
  })

  // Add list item to list
  list.appendChild(listItem);

  clearInput();
}

function clearInput() {
  input.value = ''
}
