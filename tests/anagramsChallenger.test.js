const anagramsChallenger = require('../src/anagramsChallenger');

describe('Teste para o requisito 3 do desafio da Academia Capgemini.', () => {
  it('retorna o valor correto de acordo com a string passada.', () => {
    {
        const actual = anagramsChallenger('ovo');
        const expected = 3;
        expect(actual).toStrictEqual(expected);
    }
    {
      const actual = anagramsChallenger('ova');
      const expected = 0;
      expect(actual).toStrictEqual(expected);
    }
    {
        const actual = anagramsChallenger('xyyx');
        const expected = 5;
        expect(actual).toStrictEqual(expected);
    }
    {
        const actual = anagramsChallenger('ifailuhkqq');
        const expected = 3;
        expect(actual).toStrictEqual(expected);
    }
  });

});
