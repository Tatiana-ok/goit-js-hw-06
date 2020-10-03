// Получи массив только неактивных пользователей (отфильтруй по значению свойства isActive)

// Используй деструктурирующее присваивание для параметра функции ({isActive}) без пробелов и переносов на новую строку.

// Используй оператор !.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.


const getInactiveUsers = array  => array.filter(({isActive}) => !isActive);