let title = 'Изучение JS';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 500;
let rollback  = 10;
let fullPrice = 5000;
let adaptive = true;


console.log(typeof title, typeof fullPrice, typeof adaptive);

console.log(screens.length);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей ' + 'и ' + 'Стоимость разработки сайта ' + fullPrice + ' рублей');

console.log(screens.toLocaleLowerCase().split(','));

console.log('Процент отката посреднику за работу ' + fullPrice * (rollback / 100));