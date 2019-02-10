var korean_word = [
	'dang-geun',
	'dwen-jang'
]
var korean_def = [
	'of course asdlkasjdf asd;lfkjasdf ;sadkdjfj a;sdlkfj asd;lfkj asdf sa;ldkjfsa;lkdj fdsad',
	'whatever'
]

var mandarin = [
]

var cantonese = [
]

var spanish = [
]

function displayText() {
	var word = document.getElementById('resize').value;
	var def = '';
	for (i = 0; i < korean_word.length; i++) {
		if (word == korean_word[i]) {
			def = korean_def[i];
			break;
		}
	}
	document.getElementById('definition').innerHTML=def;
} 

function contribute() {
	var new_word = document.getElementById('textbox2').value;
	korean_word.push(new_word);
	var new_word_def = document.getElementById('textbox3').value;
	korean_def.push(new_word_def);
}