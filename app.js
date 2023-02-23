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

  let num1_str = String(document.getElementById('num1').value);
  let num2_str = String(document.getElementById('num2').value);

  if (num1_str.length == 0 || num1_str.indexOf(' ') !== -1) {
    document.getElementById('result').innerHTML =
      'You did not enter the first number or you added a space in the input field';
    return;
  }

  if (num2_str.length == 0 || num2_str.indexOf(' ') !== -1) {
    document.getElementById('result').innerHTML =
      'You did not enter the second number or you added a space in the input field';
    return;
  }

  let num1 = Number(num1_str);
  let num2 = Number(num2_str);

  if (isNaN(num1)) {
    document.getElementById('result').innerHTML =
      'The calculator cannot recognize the first number. Check it out please';
    return;
  }

  if (isNaN(num2)) {
    document.getElementById('result').innerHTML =
      'The calculator cannot recognize the second number. Check it out please';
    return;
  }

  if (num1 > 99999999 || num2 > 99999999) {
    document.getElementById('result').innerHTML =
      'The calculator can work with numbers no more than 99 999 999';
    return;
  }

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
    default:
      result = 'Select a math action';
  }

  document.getElementById('result').innerHTML = result;
}

function clearFields() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').innerHTML = '';
  return;
}
