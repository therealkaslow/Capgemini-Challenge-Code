const passwordValidation = require('../src/passwordValidation');

describe('Teste para o requisito 2 do desafio da Academia Capgemini.', () => {
  it('retorna que a senha esta correta.', () => {
    {
        const actual = passwordValidation('M@x123');
        const expected = 'Sua senha foi cadastrada';
        expect(actual).toStrictEqual(expected);
    }
  });
  it('testa todas as mensagens que a senha esta incorreta.', () => {
    {
        const actual = passwordValidation('a');
        const expected = 'Adicione mais 5 caracteres à sua senha';
        expect(actual).toStrictEqual(expected);
    }
    {
        const actual = passwordValidation('aaaaa');
        const expected = 'Adicione mais 1 caractere à sua senha';
        expect(actual).toStrictEqual(expected);
    }
    {
        const actual = passwordValidation('max123456');
        const expected = 'Adicione pelo menos 1 caractere especial à sua senha';
        expect(actual).toStrictEqual(expected);
    }
    {
        const actual = passwordValidation('max12345@');
        const expected = 'Sua senha precisa conter ao menos, 1 letra minúscula, 1 maiúscula, e 1 número.';
        expect(actual).toStrictEqual(expected);
    }
  });
});
