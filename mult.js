try{
function generateSingle() {
  const num = parseInt(document.getElementById('singleNumber').value);
  const output = document.getElementById('output');
  output.innerHTML = '';
  if (!isNaN(num)) {
    for (let i = 1; i <= 10; i++) {
      output.innerHTML += `${num} x ${i} = ${num * i}\n`;
    }
  } else {
    output.innerHTML = 'Please enter a valid number.';
  }
}

function generateRange() {
  const start = parseInt(document.getElementById('startRange').value);
  const end = parseInt(document.getElementById('endRange').value);
  const output = document.getElementById('output');
  output.innerHTML = '';
  if (!isNaN(start) && !isNaN(end) && start <= end) {
    for (let num = start; num <= end; num++) {
      output.innerHTML += `\n--- Table of ${num} ---\n`;
      for (let i = 1; i <= 10; i++) {
        output.innerHTML += `${num} x ${i} = ${num * i}\n`;
      }
    }
  } else {
    output.innerHTML = 'Please enter a valid range.';
  }
}
}catch(error){
  document.getElementById('display').value='error'
  
}
