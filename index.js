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
}

// var musiciansInput = ['bon', 'slug', 'eric clapton']
// var instrumentsInput = ['guitar', 'microphone', 'piano']

