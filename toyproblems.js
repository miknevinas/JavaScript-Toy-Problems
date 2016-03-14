var nums = [ 1, 2, 3, 4, 5];
 
function arrReplace(array) {
     for (var i = 0; i < array.length; i++) {
         if (array[i] % 2 === 1) {
             array[i] === 'o';
            }
     }
       return array;   
 };

arrReplace(nums);

///

function combinator(array1, array2) {
    var newArray = [];
    for (var i = 0; i < array1.length; i++) {
        newArray.push(array1[i] + ' ' + array2[i]);
    }
    return newArray;
}

///

String.prototype.Reverse = function() {
    var newstr = '';
    for (var i > this.length - 1; i >= 0; i--) {
        newstr += this[i];
    }
    return str;
}

var str = "hi, everyone";
str.Reverse();



///


function factorial(num) {
    if (num < 0) {
        return -1;
    }
    else if (num === 0) {
        return 1;
    }
    
    else {
        return (num * factorial(num - 1));
    }
}

var fac = factorial(3);
console.log(fac);


///

function simpleSymbols(str) {
    for (var i = 0; i < str.length; i++) {
       var char = str[i];
        if (char !== '+' && char !== '=') {
            if(str[i-1] === '+' && str[i+1]) {
                //keep going
            }
            else {
                return false;
            }
        }
    }
    return true;
}

simpleSymbols('++d+===+c++==a');

///


function nonRepeat(str) {
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
}

nonRepeat("aaabbbcd");


///

function fizzBuzz(num) {
for (var n = 1; n <= num; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
  }
}
fizzBuzz(100);


///


/*-closure: scope around set of variables that you can access later*/

  var foo = function() {
    var count = 0;
      return function() {
        count += 1;
        console.log('This function has been called' + count + 'times.')
     }
}

  
  
////

function ABCheck(str) {
        for (var i = 0; i < str.length - 4; i++) {
            if (str[i] === 'a' && str[i + 4] === 'b' || str[i] === 'b' && str[i + 4] === 'a') {
            return 'true';
        }
    }
    return 'false';
}




////////////////////////////////////////

var animals = [
   {
       name: 'Dog',
       kingdom: 'Animalia',
       phylum: 'Chordata',
       class: 'Mammalia',
       order: 'Carnivora',
       family: 'Canidae',
       species: 'Canis lupus'
   },
   {
       name: 'Cat',
       kingdom: 'Animalia',
       phylum: 'Chordata',
       class: 'Mammalia',
       order: 'Carnivora',
       family: 'Felidae',
       species: 'Felis catus'
   },
   {
       name: 'Hippopotamus',
       kingdom: 'Animalia',
       phylum: 'Chordata',
       class: 'Mammalia',
       order: 'Artiodactyla',
       family: 'Hippopotamidae',
       species: 'Hippopotamus amphibius'
   },
   {
       name: 'Playtpus',
       kingdom: 'Animalia',
       phylum: 'Chordata',
       class: 'Mammalia',
       order: 'Monotremata',
       family: 'Ornithorhynchidae',
       species: 'Ornithorhynchus anatinus'
   },
   {
       name: 'Lizard',
       kingdom: 'Animalia',
       phylum: 'Chordata',
       class: 'Reptilia',
       order: 'Squamata',
       family: 'Agamidae',
       species: 'Pogona vitticeps'
   },
   {
       name: 'Blackbird',
       kingdom: 'Animalia',
       phylum: 'Chordata',
       class: 'Aves',
       order: 'Passeriformes',
       family: 'Turdidae',
       species: 'Turdus merula'
   }
];
//given the above object, write a function that returns an object whose keys are the fields 
//found above and whose values are objects containing all the values as keys and a count for 
//how many times that value occurs

//e.g.
//{
//    name: {Animalia: 6}
//    phylum: {Chordata: 6},
//    class: {Mammalia: 4, Reptilia: 1, Aves: 1}
//}

//code here
function sortAnimals(animals) {
    var newObj = {};
    for (var i = 0; i < animals.length; i++) {
        var currentAnimal = animals[i];
        for (var prop in currentAnimal) {
            if (!newObj.hasOwnProperty(prop) ) {
                newObj[prop] = {};  
            }
        
            var value = currentAnimal[prop];
        
            if (!newObj[prop].hasOwnProperty(value)) {
                newObj[prop][value] = 1;
            } else {
                var oldCount = newObj[prop][value];
                newObj[prop][value] = oldCount + 1;
            }
        }
    }
    return newObj;
}

///
// Write a function that accepts an array of integers in
// random order of unknown length, but with one number 
// missing. Return the missing number.
var set1 = [20, 18];
var set2 = [1115, 1119, 1114, 1112, 1121, 1113, 1118, 1116, 1120];
var set3 = [93, 95, 101, 96, 102, 100, 97, 90, 92, 105, 106, 103, 88, 91, 94, 104, 89, 98];
var set4 = [8, 4, 5, 9, 2, 6, 1, 10, 7];
var set5 = [93, 95, 101, 96, 102, 100, 97, 90, 92, 105, 106, 103, 88, 91, 94, 104, 89, 98, 99];
var set1 = [20, 18];

function sortNums(nums) {
    for (var j = 0; j < nums.length; j++) {
    for (var i = 0; i < nums.length; i++) {
       if (nums[i] > nums[i + 1]) {
           var swap = nums[i];
           nums[i] = nums[i+1];
           nums[i+1] = swap;
         } 
       }
    }
    console.log(nums);
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i]+1 !== nums[i+1]) {
            return nums[i] + 1;
        }
    }
    return 'either '+(nums[0]-1) + 'or ' + (nums[nums.length-1]+1);
}



