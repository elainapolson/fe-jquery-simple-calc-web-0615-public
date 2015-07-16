$(function(){

  var num1 = 0;
  var num2 = 0;
  var operation = '+';

//changing operation
  $('#add').click(function() {
    $('#operation').text('+');
    operation = '+';
  });

  $('#sub').click(function() {
    $('#operation').text('-');
    operation = '-';
  });

  $('#mult').click(function() {
    $('#operation').text('*');
    operation = '*';
  });

  $('#div').click(function() {
    $('#operation').text('/');
    operation = '/';
  });

// changing num1 and num2
  $('#number1 > button.incr').first().click(function() {
    $('#number1 > h2').text(num1 += 1);
  });

  $('#number2 > button.incr').first().click(function() {
    $('#number2 > h2').text(num2 += 1);
  });

  $('#number1 > button.decr').first().click(function() {
    $('#number1 > h2').text(num1 -= 1);
  });

  $('#number2 > button.decr').first().click(function() {
    $('#number2 > h2').text(num2 -= 1);
  });

// perform operation
  function operate() {
    if (operation == '+') { 
      return num1 + num2
    } else if (operation == '-') {
      return num1 - num2
    } else if (operation == '*') {
      return num1 * num2
    } else if (operation == '/') {
      return num1 / num2
    }
    
  }

  $('#equals').click(function() {
    $('#result').text(operate);
  });

});
