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
"<h6>[Ex.] <i>Ugh I've missed so much, what's the <b>tea</b> sis?</h6></i>" +
"<h6>entry by missmiaonfire [2018]</h6>";

term[1] = "<b><center>shook</center></b>" + "<br>" + 
"<h6>shocked or surprised af. can't believe what you're seeing</h6>" + 
"<h6>[Ex.] <i>Girrrrl look at my highlighter</i> <br><br> BITCH I'M <i><b>SHOOK</b></i></h6>" +
"<h6>entry by __kolster [2016]</h6>";

term[2] = "<b><center>oof</center></b>" + "<br>" + 
"<h6>when you don't really care but should say at least something</h6>" + 
"<h6>[Ex.] You: <i>I think I'm having a heart attack.</i> <br><br>Me: <i><b>oof</b></i></h6>" +
"<h6>entry by mikaschm [2018]</h6>";

term[3] = "<b><center>salty</center></b>" + "<br>" + 
"<h6>Being salty is when you are upset over something little</h6>" + 
"<h6>[Ex.] <i>He was so <b>salty</b> after he died in smash bros</i></h6>" +
"<h6>entry by Nerdcatgamer [2017]</h6>";

term[4] = "<b><center>woke</center></b>" + "<br>" + 
"<h6>The act of being very pretentious about how much you care about a social issue</h6>" + 
"<h6>[Ex.] <i>Yeah, most people don't care about parking spaces for families with disabled pets. I wish they were <b>woke</b> like me.</i></h6>" +
"<h6>entry by Vensamos made on [2018]</h6>";

term[5] = "<b><center>mood</center></b>" + "<br>" + 
"<h6>Used to express that something is relatable. Similar to 'Same,' but 'Mood' became more common around 2016.</h6>" + 
"<h6>[Ex.] <i>(commenting on a photo of a cat who looks super lazy) <b>Mood</b> af</i></h6>" +
"<h6>entry by e.a.92 [2017]</h6>";

term[6] = "<b><center>bye felicia</center></b>" + "<br>" + 
"<h6>When someone says that they're leaving and you could really give two shits less that they are. Their name then becomes 'felicia', a random " +
"bitch that nobody is sad to see go. They're real name becomes irrelevant because nobody cares what it really is. Instead, they now are 'felicia'.</h6>" + 
"<h6>[Ex.] <i>hey guys i'm gonna go <br> <b>bye felicia</b> <br> who is felicia? <br> exactly bitch. buh bye.</i></h6>" +
"<h6>entry by pimpin'817 [2008]</h6>";

term[7] = "<b><center>receipts</center></b>" + "<br>" + 
"<h6>proof or evidence when there is tea getting spilled. <br> receipts can be tweets, texts, or any physical proof of something.</h6>" + 
"<h6>[Ex.] <i>How do you know that he's cheating on me? <br> hun i got all the <b>receipts</b></i></h6>" +
"<h6>entry by etetetetetetet [2018]</h6>";

term[8] = "<b><center>beat</center></b>" + "<br>" + 
"<h6>When something is uncool, lame, dumb, ugly, boring. Anything that is displeasuring.</h6>" + 
"<h6>[Ex.] <i>Thats <b>Beat</b>. <br> You're <b>Beat</b> <br>Homework is <b>Beat.</b> <br>That shits <b>Beat</b></i></h6>" +
"<h6>entry by cxxzz [2011]</h6>";

term[9] = "<b><center>no cap</center></b>" + "<br>" + 
"<h6>No cap basically mean that they're not lying <br>or capping like they did something. <br> Sometimes ppl write it like this🙅🏽 ♀️🧢or 🚫🧢 different ways</h6>" + 
"<h6>[Ex.] <i>That food was good <b>no cap</b> <br> I hit that bit <b>no cap</b></i></h6>" +
"<h6>entry by Leelee😈 [2018]</h6>";

term[10] = "<b><center>swerve</center></b>" + "<br>" + 
"<h6>A word meaning 'Move, bitch.' It is an evolved form of the phrase once uttered by Ludacris: 'Move, bitch, get out the way.' <br>It is known as the most scholarly word of the new generation.ways</h6>" + 
"<h6>[Ex.] <i>Oh shit. I need to use the bathroom. <b>Swerve</b>, bitch!</i></h6>" +
"<h6>entry by my bff jill [2014]</h6>"

term[11] = "<b><center>feels</center></b>" + "<br>" + 
"<h6>A wave of emotions that sometimes cannot be adequately explained</h6>" + 
"<h6>[Ex.] <i>Watching Back To The Future gives me all sorts of nostalgic <b>feels</b>.</i></h6>" +
"<h6>entry by KissTheDragon [2012]</h6>";

term[12] = "<b><center>tbh</center></b>" + "<br>" + 
"<h6>Tbh - to be honest. Is fucking overused and when ugly ass bitches post on their Instagram 'comment for a tbh!' <br>" + 
"It means that they are gonna write some complete bullshit about how nice you <br> when they don't even give two fucks.... And then the next day you find out that motherfucker ain't even following you back.</h6>" + 
"<h6>[Ex.] <i><b>Tbh</b> your so friendly and I love how you care so much about equality :)</i></h6>" +
"<h6>entry by Bitch peas [2016]</h6>";

term[13] = "<b><center>gucci</center></b>" + "<br>" + 
"<h6>A versatile slang term based on the luxury fashion brand meaning okay/good/great/awesome/fresh/etc. Originally used in the streets but now popularized by the masses. Sometimes abbreviated 'gooch' if you're an expert in its use. <br>To be all Gucci is a wonderful thing indeed.</h6>" + 
"<h6>[Ex.] <i>Hey. How are you? Haven't seen you in a while. Everything okay? <br> Yeah everything's <b>Gucci</b>. I've just been busy.</i></h6>" +
"<h6>entry by bazz22 [2018]</h6>";


term[14] = "<b><center>lit</center></b>" + "<br>" + 
"<h6>When something is turned up or popping ...</h6>" + 
"<h6>[Ex.] <i>John : did you go to that party last night <br> Daquan : yes that shit was <b>lit</b></i></h6>" +
"<h6>entry by  fatousbobala [2014]</h6>";

term[15] = "<b><center>shady</center></b>" + "<br>" + 
"<h6>to be very sneaky, suspect, or to have an all around backstabbing personality</h6>" + 
"<h6>[Ex.] <i>Jocelyn or DJ is one <b>shady</b> individual, which is why she is called Shady C.</i></h6>" +
"<h6>entry by  ak3aeafdf [2014]</h6>";

term[16] = "<b><center>bæ</center></b>" + "<br>" + 
"<h6>Bæ/bae is a Danish word for poop. Also used by people on the internet who think it means baby, sweetie etc.</h6>" + 
"<h6>[Ex.] <i><b>Bae</b> I love u so much <br> Brian, my <b>bae</b> <br> I just made a <b>bæ</b></i></h6>" +
"<h6>entry by ak3aeafdf [2014]</h6>";

term[17] = "<b><center>snatched</center></b>" + "<br>" + 
"<h6>a popular term in the gay community referring to good looks, fierceness, or something good.</h6>" + 
"<h6>[Ex.] <i>that wig is <b>snatched</b> hunny! is it real or synthetic?</i></h6>" +
"<h6>entry by flipandtwist2x [2011]</h6>";

term[18] = "<b><center>basic</center></b>" + "<br>" + 
"<h6>only interested in things mainstream, popular, and trending</h6>" + 
"<h6>[Ex.] <i>Omg BAE is so <b>basic</b>. all she wants to do is drink pumpkin spice lattes and play candy crush.</i></h6>" +
"<h6>entry by itsmeeeeeyo [2015]</h6>";

term[19] = "<b><center>yas</center></b>" + "<br>" + 
"<h6>An annoying expression used by girls expressing extreme liking.</h6>" + 
"<h6>[Ex.] <i>Guy: Hey do you know that dude over there? <br> Girl: <b>YASSSS</b> he's so awesome like I mean <b>YASSSS</b>.</i></h6>" +
"<h6>entry by WingsDude [2014]</h6>";

term[20] = "<b><center>extra</center></b>" + "<br>" + 
"<h6>over the top <br> excessive, dramatic behavior <br> way too much</h6>" + 
"<h6>[Ex.] <i>Guy: Hey do you know that dude over there? <br> Girl: <b>YASSSS</b> he's so awesome like I mean <b>YASSSS</b>.</i></h6>" +
"<h6>entry by WingsDude [2014]</h6>";
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


function urbanTerm() {
	var randomTerm = Math.floor(Math.random()*(term.length));
	 document.getElementById('ud-term').innerHTML = term[randomTerm];
}
