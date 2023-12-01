// Number type variable
var money = 100;
var students = 50;
console.log('Number type variable', money, students);

// String type variable
var name = 'Miraz';
var place = 'Basundhara R/A';
console.log('String type variable', name, place);

// Boolean type variable
var isYouLoveMe = true;
var isYouPassTheExam = false;
console.log('Boolean type variable', isYouLoveMe, isYouPassTheExam);

// Array declaration
var nameOfFriends = ['miraz', 'topu', 'apon', 'roysa'];
console.log(nameOfFriends);

var elements = nameOfFriends[2];
console.log(elements);

nameOfFriends[2] = 'anika';
console.log(nameOfFriends[2]);

var maleFriend = nameOfFriends.indexOf('topu');
console.log(maleFriend);

nameOfFriends.push('moitry');
console.log(nameOfFriends);

nameOfFriends.pop();
console.log(nameOfFriends);

// Conditionals
var iPhonePrice = 160000;
var myBudget = 1000;
var applePrice = 500;

if(iPhonePrice > myBudget){
    console.log("Go get some money to buy a iPhone");
}

else if(myBudget > applePrice){
    console.log("Eat some fresh apple")
}
else{
    console.log("Khatam...tata...buy buy");
}