
// Получи массив имен всех пользователей (свойство name) используя деструктурирующее присваивание для параметра функции ({name}) без пробелов и переносов на новую строку.

// Используй только перебирающие методы массива которые не изменяют (не мутируют) исходный массив. Т.е. нельзя использовать for, splice, push и т.п. мутирующие методы.

const players = [
    {id: 'player-1', name: 'Mango'},
    {id: 'player-2', name: 'Poly'},
    {id: 'player-3', name: 'Kiwi'}
]

const getUserNames = array => array.map(({name}) => name);


// console.log(getUserNames(players));

/* [
  "Moore Hensley",
  "Sharlene Bush",
  "Ross Vazquez",
  "Elma Head",
  "Carey Barr",
  "Blackburn Dotson",
  "Sheree Anthony",
] */