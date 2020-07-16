// add solution here
function theBeatlesPlay(musicians, instruments) {
  var resArr = [];

  if (musicians.length === instruments.length) {
    for (var i = 0; i < instruments.length; i++) {
      var string = musicians[i] + ' plays ' + instruments[i];
      resArr.push(string);
      console.log(resArr);
    }
  }
}

var musiciansInput = ['bon', 'slug', 'eric clapton']
var instrumentsInput = ['guitar', 'microphone', 'piano']

theBeatlesPlay(musiciansInput, instrumentsInput)
