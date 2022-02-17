// requisito 1 do desafio da Academia Capgemini
// impressão do desafio feita no terminal, retorno do array somente para os testes unitários, ou uso para imprimir em uma html.

function aux(columnIndex, inputPosition, inpLine) {
    let inputLine = inpLine;
    const symbol = '*';
    if (columnIndex < inputPosition) {
      inputLine += ' ';
    } else {
      inputLine += symbol;
    }
    return inputLine;
  }
  
  function starLadder(numberInput) {
    let inputLine = '';
    let inputPosition = numberInput;
    const returnArr = [];
    for (let lineIndex = 0; lineIndex < numberInput; lineIndex += 1) {
      // se quiser mais afastado da tela colocar columnIndex 0.
      for (let columnIndex = 1; columnIndex <= numberInput; columnIndex += 1) {
        inputLine = aux(columnIndex, inputPosition, inputLine);
      }
      console.log(inputLine);
      returnArr.push(inputLine);
      inputLine = '';
      inputPosition -= 1;
    }
    return returnArr;
  }
  
  module.exports = starLadder;
  