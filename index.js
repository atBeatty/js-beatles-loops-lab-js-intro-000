// add solution here
function theBeatlesPlay(musicians, instruments) {
  var resArr = [];

  if (musicians.length === instruments.length) {
    for (var i = 0; i < instruments.length; i++) {
      var string = '';
      string = musicians[i] + ' plays ' + instruments[i];
      resArr.push(string);
    }
  }
  return resArr;
}

// var musiciansInput = ['bon', 'slug', 'eric clapton']
// var instrumentsInput = ['guitar', 'microphone', 'piano']

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var exclamationString = '';
  var exclamations = [];

  let n = 0; console.log(facts.length)
  while (n < facts.length){

    exclamationString = facts[n] + "!!!"
    exclamations.push(exclamationString)
    n++;

  }
  return exclamations
}

johnLennonFacts(facts)


function iLoveTheBeatles(number) {
  var strings = [];

  do {
    strings.push('I love the Beatles!');
    number++;
  }
  while (number <  15)

  return strings;
}
