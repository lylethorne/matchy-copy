/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'dog';
animal['name'] = 'Yarrow';
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'bark';
noises[noises.length] = 'boof';
noises.unshift('grumbles');
noises.splice(3, 0, 'whine');
console.log(noises.length);
console.log(noises.length - 1);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal.noises.push('yawn');
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * //can access different properties using dot and bracket notation
 * can access key and value pairs using a for in loop
 *
 * 2. What are the different ways of accessing elements on arrays?
 * //can access using dot notation with the different array methods 
 * and also their index ex array[0] accesses the first element within the array
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);

var kiki = { species: 'cat', name: 'Kiki', noises: ['purr', 'moew', 'yelling']};
var lizard = {species: 'lizard', name: 'King', noises: ['roar', 'chomp']};
animals.push(kiki);
animals.push(lizard);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**using an array to hold the list of friends is the best way to hold other data like this
 * an object's key/value pairs are related to the object that they represent.  
*/
var friends = [];
function getRandom(){
  //looping over array
  for(var i = 0; i < animals.length; i ++){
let x = Math.floor(Math.random() * animals.length);
return x;
  }
}
var index = getRandom(animals);
var randomAnimal = animals[index].name;
friends.push(randomAnimal);
console.log(friends);
kiki.friends = [];
console.log(friends);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}