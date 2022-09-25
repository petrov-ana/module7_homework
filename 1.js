/*
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи 
и значения только собственных свойств. 
Данная функция не должна возвращать значение.
*/
let obj1 = {
   name: 'Андрей',
   age: '45',
   sex: 'мужской',
   hasOwnProperty: function () {
      return false;
   }
};

let obj2 = Object.create(obj1);
obj2.url = 'vk.com';
obj2.colors = ['желтый', 'серо-голубой', 'фисташковый'];

function printObjectKeyValue(obj) {
   Object.keys(obj).forEach((prop) => console.log('   Ключ: ' + prop + ', Значение: ' + obj[prop]));
}

console.log('Ключи и значения объекта №1:')
printObjectKeyValue(obj1);

console.log('Ключи и значения объекта №2:')
printObjectKeyValue(obj2);