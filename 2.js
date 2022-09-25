/*
�������� �������, ������� ��������� � �������� ���������� ������ � ������, 
� ����� ��������� ���� �� � ����������� ������� �������� � ������ ������. 
������� ������ ���������� true ��� false.
*/

let obj1 = {
   name: '������',
   age: '45',
   sex: '�������',
   hasOwnProperty: function () {
      return false;
   }
};


function isOwnProperty(obj, string) {
   return Object.prototype.hasOwnProperty.call(obj, string);
}

console.log(isOwnProperty(obj1, 'age'))