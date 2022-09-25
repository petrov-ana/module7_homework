/*
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.
*/

//Электроприбор
function ElectricalAppliance(name, power) {
   this.name = name;//название прибора
   this.power = power;//потребляемая мощность
   this.isPlugged = false;//по умолчанию прибор отключен
}

// метод, который определяет прибор как включенный в розетку 
ElectricalAppliance.prototype.plugIn = function () {
   console.log(this.name + " подключен!");
   this.isPlugged = true;
}

// метод, который определяет прибор как отключенный из розетки
ElectricalAppliance.prototype.plugOut = function () {
   console.log(this.name + " отключен!");
   this.isPlugged = false;
}

/*
метод, возвращающий значение потребляемой мощности 
в зависимости от состояния прибора включено/выключено
*/
ElectricalAppliance.prototype.getPower = function () {
   return this.isPlugged ? this.power : 0;
}

//Тостер
function Toster(name, power, numberToasts, numberModes, numberCompartments) {
   ElectricalAppliance.call(this, name, power);//инициализируем свойства name и power электроприбора
   this.numberToasts = numberToasts; //Количество тостов
   this.numberModes = numberModes; //Количество режимов
   this.numberCompartments = numberCompartments; //Количество отсеков
}

//Cоздаем новый объект ElectricalAppliance и делаем его значением Teacher.prototype
Toster.prototype = new ElectricalAppliance();

//Компьютер
function Computer(name, power, cpuFrequency, ram, processorManufacturer) {
   ElectricalAppliance.call(this, name, power);//инициализируем свойства name и power электроприбора
   this.cpuFrequency = cpuFrequency; //Частота процессора
   this.ram = ram; //Объем оперативной памяти
   this.processorManufacturer = processorManufacturer; //Производитель процессора
}

//Cоздаем новый объект ElectricalAppliance и делаем его значением Computer.prototype
Computer.prototype = new ElectricalAppliance();

//Создаем объект компьютер
let computer = new Computer('Компьютер IRU', 450, 2.5, 16, 'Intel');

//Создаем объект тостер
let toster = new Toster('Тостер Tefal', 700, 2, 6, 2);

console.log('Приборы выключены');
console.log(`Потребляемая мощность: ${toster.getPower() + computer.getPower()}`);

toster.plugIn();
console.log(`Потребляемая мощность: ${toster.getPower() + computer.getPower()}`);

computer.plugIn();
console.log(`Потребляемая мощность: ${toster.getPower() + computer.getPower()}`);

toster.plugOut();
console.log(`Потребляемая мощность: ${toster.getPower() + computer.getPower()}`);

computer.plugOut();
console.log(`Потребляемая мощность: ${toster.getPower() + computer.getPower()}`);