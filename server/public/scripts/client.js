//setting global variables to be used whenever
//figure out if necessary
var input1 = $('#input1').val();
var input2 = $('#input2').val();
var execute = $('#submitButton');
var multiplication;
var addition;
var subtraction;
var division;
var operation;
var result;
var fix;

$(document).ready(function(){
//setting operation variable to be used for switch function

  $('#multiplication').on('click', function(){
    $('#sign').empty();
    $('#sign').text('*');
    operation = "multiplication";
  });

  $('#addition').on('click', function(){
    $('#sign').empty();
    $('#sign').text('+');
    operation = "addition";
  });

  $('#subtraction').on('click', function(){
    $('#sign').empty();
    $('#sign').text('-');
    operation = "subtraction";
  });

  $('#division').on('click', function(){
    $('#sign').empty();
    $('#sign').text('/');
    operation = "division";
  });

$('#submitButton').on('click', function(){
  input1 = $('#input1').val();
  input2 = $('#input2').val();
  $('.result-field').text("Umm..");
  setTimeout(computing, 3000); //delayed 3 seconds...
});//end of submitButton function
$('#resetButton').on('click', function(){
  $('.result-field').empty();
  $('#input1').val('');
  $('#input2').val('');
  $('#sign').empty();
});

// moved to module folder

// //switch statement to select computation
// function calculate(operation){
//
//   switch (operation) {
//     case "multiplication":
//     result = input1 * input2;
//     return result;
//
//       break;
//     case "addition":
//     result = parseInt(input1) + parseInt(input2);
//       break;
//     case "subtraction":
//     result = input1 - input2;
//       break;
//     case "division":
//     result = input1 / input2;
//     fix = result.toFixed(2);
//     result = fix;
//     return result;
//       break;
//       default: console.log('idk');
//   }
// };//end of switch statment

});//end of document ready function

function computing(){
  $.ajax({
    type: 'POST',
    url: '/solveIt',
    data: {operation: operation,
           input1: input1,
           input2: input2},
    success: function(response){
      $('.result-field').empty();
      $('.result-field').text(response);
      }
   });
 } // retrieved data using ajax, put it inside of 'computing' function
  // to call it insite of setTimeout.
