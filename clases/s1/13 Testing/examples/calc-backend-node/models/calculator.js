module.exports = {
  calculate: function calculate(operation, number1, number2) {
    if (operation === 'sum') {
      return number1 + number2;
    } else if (operation === 'sub') {
      return number1 - number2;
    } else if (operation === 'times') {
      return number1 * number2;
    } else if (operation === 'div') {
      if (number2 === 0) {
        return 'infinity';
      }
      return number1 / number2;
    } else {
      return null;
    }
  }
}
