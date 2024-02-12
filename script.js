const board = document.getElementById('board');
var allDataOfStars=[];
  // Create 100 cells dynamically
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    // Set a unique ID for each cell
    cell.id = `cell-${i + 1}`;
    // Generate a random number between 1 and 9
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    // Set the content of the cell to the random number
    if(randomNumber==10)
    cell.innerHTML = '<i class="fas fa-star"></i>';
    // Add the 'red' class to make the cell color red
    cell.classList.add('marked');
    // Add the 'hidden' class to hide the cell content
    cell.classList.add('hidden');
    // Append the cell to the board
    cell.addEventListener('click', () => {
      // Toggle the 'red' class to add/remove red background color
      console.log(cell.classList)
      let arr=[...cell.classList]
      
      if(arr.includes('marked'))
      {
      cell.classList.remove('marked');
      // Toggle the 'hidden' class to show/hide cell content
      cell.classList.remove('hidden');
      if(cell.innerHTML=='')
      checkTheCellValue(cell.id);
      }
    });
    cell.addEventListener('contextmenu', (e) => {
      // Toggle the 'red' class to add/remove red background color
      e.preventDefault();
      if(cell.innerHTML=='<i class="fas fa-star"></i>')
      cell.classList.remove('red');
      cell.classList.add('blue');
    });
    board.appendChild(cell);
  }
function checkTheCellValue(cellId){
    console.log(cellId)

}