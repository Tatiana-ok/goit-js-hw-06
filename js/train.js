const numbers = [1, 2, 3];

// numbers.forEach( num => console.log (num));

// numbers.forEach((num, com, arr) => console.log(`index ${num}, value ${com}, array ${arr}`))

const players = [
    {id: 'player-1', name: 'Mango'},
    {id: 'player-2', name: 'Poly'},
    {id: 'player-3', name: 'Kiwi'}
]

const playerId = 'player-2';

const updatePlayerId = players.map(player => {
    if(playerId === player.id) {
        return {
            name: 'Ajax',
        };
    }
    return player;
});

// console.log(updatePlayerId);


var isSquare = function(n){
    if (Number.isInteger(Math.sqrt(n))){
      return `${n} is a square number (${Math.sqrt(n)} * ${Math.sqrt(n)})`;
    } else {
      return `${n} is not a square number`;
    }
}

// console.log(isSquare(4));


const message = 'Welcome to Bahamas!';

const s = message.split(' ').join('-');

console.log(s);