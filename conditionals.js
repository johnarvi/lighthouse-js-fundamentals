/*
const raining = false;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
} 

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");
*/

/*
const cold = true;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

*/

const temperature = -5;
// set temp. < 0 (i.e. temperature = -5) to get a scarf required message
// set temp. > 15 (i.e. temperature = 50) to get a short sleeves are fine message
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");















