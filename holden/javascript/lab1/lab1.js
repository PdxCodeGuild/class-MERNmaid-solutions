//part 1
let name = "Holden";
let age = 24;
age += 1;

//part 2
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(12, 4));
const hello = () => console.log("larg");
hello();
const iseven = function (num){
  if (num % 2){
    return false
  } else {
    return true
  }
}
console.log(iseven(12));
console.log(iseven(15));

//part 3
const animals = ['dog', 'cat', 'llama', 'bird'];
for (animal of animals){
  console.log(animal.toUpperCase())
}
for (i in animals){
  if (animals[i] == 'cat'){
    animals.splice(i, 1, 'opossum')
  }
}
console.log(animals.pop())
console.log(animals)