//Задание 7.6.1
let a = "Довод";
if (a.toLowerCase().split("").reverse().join("") == a.toLowerCase()) {
    `Слово \'${a}\' является палиндромом`
} else {
    `Cлово \'${a}\' не является палиндромом`
}
let b = "Сантимент";
if (b.toLowerCase().split("").reverse().join("") == b.toLowerCase()) {
    `Слово \'${b}\' является палиндромом`
} else {
    `Слово \'${b}\' не является палиндромом`
}
//Задание 7.6.2
 const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
Array.from(new Set([1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]));
//Задание 7.6.3
const string = prompt('Введите любое число');
const number = parseInt(string);
const array = [];
for (let n = 0; n <= number; n +=1) {
  array.push(n);
}
console.log(array);
//Задание 7.6.4
const rows = 3;
const cols = 3;
const board = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
];

for (let i = 0; i < rows; i++) {
    let rowStr = '';
    for (let j = 0; j < cols; j++) {
        rowStr += board[i][j];
        if (j < cols - 1) {
            rowStr += ' ';
        }
    }
    console.log(rowStr);
}
//Задание 7.6.5
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];
for (let key in obj) {
    if (Array.isArray(obj[key])) {
        for (let val of obj[key]) {
            arrValues.push(val);
        }
    } else {
        arrValues.push(obj[key]);
    }
};
console.log(arrValues);
