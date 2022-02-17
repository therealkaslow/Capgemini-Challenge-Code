// import anagramsChallenger from '../src/anagramsChallenger';
const starLadder = require('../src/starLadder');

describe('Teste para o requisito 1 do desafio da Academia Capgemini.', () => {
  it('retorna array com a escada correta.', () => {
    {
        const expected = ['    *','   **', '  ***', ' ****', '*****'];
        const actual = starLadder(5);
        expect(actual).toStrictEqual(expected);
    }
    {
        const expected = [' *','**'];
        const actual = starLadder(2);
        expect(actual).toStrictEqual(expected);
    }
  });

});
