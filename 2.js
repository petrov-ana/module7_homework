/*
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

let obj1 = {
   name: 'Андрей',
   age: '45',
   sex: 'мужской',
   hasOwnProperty: function () {
      return false;
   }
};


function isOwnProperty(obj, string) {
   return Object.prototype.hasOwnProperty.call(obj, string);
}

console.log(isOwnProperty(obj1, 'age'))