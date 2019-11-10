//referenced Ralph Phillips' YT Tutorial: Use Javascript to Display Random Trivia on Click
// https://www.youtube.com/watch?v=PhKQFUJuArs&t=37s


// 'use strict'
 
// const ud = require('urban-dictionary')


// ud.random((error, result) => {
//   if (error) {
//     console.error(error.message)
//   } else {
//     console.log(result.word)
//     console.log(result.definition)
//     // console.log(result.example)
//     var word = result.word;
//   	console.log(word + ' [the word fuckin works]');
//   	// document.getElementById('ud-term').innerHTML = word;
// }

// })


var term = []
term[0] = "<b><center>tea</center></b>" + "<br>" + 
"<h6>the best kind of gossip, typically shared between friends.</h6>" + 
"<h6>[Ex.] <i>ugh I've missed so much, what's the <b>tea</b> sis?</h6></i>" +
"<h6>entry by missmiaonfire</h6>";
term[1] = "<b><center>shook</center></b>" + "<br>" + 
"<h6>shocked or surprised af. can't believe what you're seeing</h6>" + 
"<h6>[Ex.] <i>Girrrrl look at my highlighter</i> <br><br> BITCH I'M <i><b>SHOOK</b></i></h6>" +
"<h6>entry by __kolster</h6>";
;
// term[2] = "oof";
// term[3] = "salty";
// term[4] = "woke";
// term[5] = "mood";
// term[6] = "bye felicia";
// term[7] = "receipts";
// term[8] = "beat";
// term[9] = "no cap";
// term[10] = "swerve";
// term[11] = "on fleek";
// term[12] = "tbh";
// term[13] = "slaps";
// term[14] = "dead";
// term[15] = "shade";
// term[16] = "bae";
// term[17] = "snatched";
// term[18] = "basic";
// term[19] = "yas";
// term[20] = "G.O.A.T";
// term[21] = "extra";
// term[22] = "gucci";
// term[23] = "keep it 100";
// term[24] = "lit";
// term[25] = "low key";
// term[26] = "ratchet";
// term[27] = "savage";
// term[28] = "stan";
// term[29] = "thirsty";
// term[30] = "AF";
// term[31] = "turnt";
// term[32] = "twerk";
// term[33] = "milk";
// term[34] = "woke";
// term[35] = "finsta";
// term[36] = "simping";
// term[37] = "roast";
// term[38] = "high key";
// term[39] = "feels";
// term[40] = "goals";
// term[41] = "5 AM";
// term[42] = "aight"
// term[43] = "and i oop"
// term[44] = "vsco girl"
// term[45] = "FOMO"
// term[46] = "FOMO"


function urbanTerm() {
	var randomTerm = Math.floor(Math.random()*(term.length));
	 document.getElementById('ud-term').innerHTML = term[randomTerm];
}
