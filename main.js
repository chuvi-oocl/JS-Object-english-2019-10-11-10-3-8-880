//Task 1
var user = {};
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;

//Task 2
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
console.log(Object.values(fruit).reduce((total, value) => {return total+value}, 0));
