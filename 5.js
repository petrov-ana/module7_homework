/*
Переписать консольное приложение из предыдущего юнита на классы
*/

//Электроприбор
class ElectricalAppliance {
   constructor(name, power) {
      this.name = name;
      this.power = power;
      this.isPlugged = false;
   }
   // метод, который определяет прибор как включенный в розетку
   plugIn() {
      console.log(this.name + " подключен!");
      this.isPlugged = true;
   }
   // метод, который определяет прибор как отключенный из розетки
   plugOut() {
      console.log(this.name + " отключен!");
      this.isPlugged = false;
   }

   getPower() {
      return this.isPlugged ? this.power : 0;
   }
}

//Тостер
class Toster extends ElectricalAppliance {
   constructor(name, power, numberToasts, numberModes, numberCompartments) {
      super(name, power); //инициализируем свойства name и power электроприбора
      this.numberToasts = numberToasts; //Количество тостов
      this.numberModes = numberModes; //Количество режимов
      this.numberCompartments = numberCompartments; //Количество отсеков
   }
}

//Компьютер
class Computer extends ElectricalAppliance {
   constructor(name, power, cpuFrequency, ram, processorManufacturer) {
      super(name, power); //инициализируем свойства name и power электроприбора
      this.cpuFrequency = cpuFrequency; //Частота процессора
      this.ram = ram; //Объем оперативной памяти
      this.processorManufacturer = processorManufacturer; //Производитель процессора
   }
}

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