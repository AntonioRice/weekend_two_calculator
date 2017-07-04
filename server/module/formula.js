//switch statement to select computation
function calculate(operation){

  switch (operation) {
    case "multiplication":
    result = input1 * input2;
    return result;
      break;

    case "addition":
    result = parseInt(input1) + parseInt(input2);
    return result;
      break;

    case "subtraction":
    result = input1 - input2;
    return result;
      break;

    case "division":
    result = input1 / input2;
    fix = result.toFixed(2);
    result = fix;
    return result;
    
      break;
      default: console.log('OOPS');
  }
};//end of switch statment

module.exports = calculate;
