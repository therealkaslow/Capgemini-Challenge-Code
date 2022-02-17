// requisito 2 do desafio da Academia Capgemini

function countSpecialCaracters(password) {
    return password.match(/[!@#$%^&*()-+]+/g) ? password.match(/[!@#$%^&*()-+]+/g) : [];
  }
  
  function errorMensages(arrPassword, minLength, password) {
    if (arrPassword.length === 5) {
      return `Adicione mais ${(minLength - arrPassword.length)} caractere à sua senha`;
    }
    if (arrPassword.length < minLength) {
      return `Adicione mais ${(minLength - arrPassword.length)} caracteres à sua senha`;
    }
    const countSpecialArr = countSpecialCaracters(password);
    if (countSpecialArr.length === 0) {
      return 'Adicione pelo menos 1 caractere especial à sua senha';
    }
    return 'Sua senha precisa conter ao menos, 1 letra minúscula, 1 maiúscula, e 1 número.';
  }
  
  function passwordValidation(password) {
    const minLength = 6;
    const arrPassword = password.split('');
    const verifyPassword = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()-+])/gm;
    if (arrPassword.length >= minLength && verifyPassword.test(password)) {
      return 'Sua senha foi cadastrada';
    }
    return errorMensages(arrPassword, minLength, password);
  }
  
  module.exports = passwordValidation;
  