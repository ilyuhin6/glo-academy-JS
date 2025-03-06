const num = 266219;
const numArray = String(num).split('');
const numArrayMulti = eval(numArray.join('*')) ** 3;

console.log(numArrayMulti); //Проверка переумножения масива и возведения в степень

console.log(String(numArrayMulti)[0], String(numArrayMulti)[1]);




