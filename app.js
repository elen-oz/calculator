let op;

function sel_light(sel_id) {
  document.getElementById('plus').classList.remove('light');
  document.getElementById('minus').classList.remove('light');
  document.getElementById('times').classList.remove('light');
  document.getElementById('divide').classList.remove('light');

  document.getElementById(sel_id).classList.add('light');

  switch (sel_id) {
    case 'plus':
      op = '+';
      break;
    case 'minus':
      op = '-';
      break;
    case 'times':
      op = '*';
      break;
    case 'divide':
      op = '/';
      break;
  }
}

document.getElementById('num2').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    func();
  }
});

function func() {
  let result;
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  document.getElementById('result').innerHTML = result;
}
