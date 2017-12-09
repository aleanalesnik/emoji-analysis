
//EMOJIS USED FOR ANALYSIS -------------------------------

const negativeEmojis = ["😭", "😂", "😢", "😱", "🤔", "💀", "😔", "🙄", "💩", "😩", "😬", "😒", "😞", "😷", "🖕", "😥", "😤", "😡", "😫", "😣", "😨",
"😓", "😵", "😲", "😰", "😖", "👿", "😠", "😧", "👎", "🤒", "😿", "😟", "☹️", "🙁", "🤕", "😾", "😦"];

const positiveEmojis = ["❤️", "😍", "💕", "😘", "😊", "😎", "👍", "💋", "💙", "😋", "😉", "💪", "🙏", "☀️", "💯", "💖", "💗", "🔥",
"👌", "😁", "💓", "🎂", "🙈", "🍻", "😻", "💚", "😄", "😀", "😆", "🌈", "💛", "🤗", "🎁", "🎉", "♥️", "😇", "🔝", "🙌", "☺️", "😃", "😏",
"👏", "😚", "😙", "💘", "😌", "💝", "💟", "🍾", "😛", "😺", "🙂", "🏆", "😗", "😸", "💜", "😽", "😹", "😼", "🙉"];

const neutralEmojis = ["🐶", "🌸", "📷", "🌞", "☕", "👑", "🌹", "😜", "🐱", "💅", "🎄", "🍁", "🍓", "🌊", "🍺", "❄️", "🐾", "🐷",
"🍴", "✈️", "🐈", "✨", "🎧", "🎃", "🍷", "🌴", "👀", "🎶", "🐰", "🍑", "📸", "🍕", "👻", "⚽", "🐕", "😈", "💄", "🍰", "💎", "💐", 
"🌺", "🐻", "🍦", "😅", "🌙", "🍀", "😝", "🎀", "✌️", "😴", "👊", "🎨", "🍫", "💍", "🍔", "🍂", "🦄", "🌻", "🌿", "🎈", "🤘", "📚", 
"🍜", "🌷", "🌼", "🐼", "🐟", "🚗", "☁️", "👙", "🍃", "🍹", "🙊", "🎤", "🍣", "🌲", "👅", "💦", "🌳", "👽", "🐩", "🤓", "🍸", "🏀", 
"🌵", "🌱", "🍩", "🍒", "🌟", "😳", "💤", "🐝", "👟", "🙃", "👠", "🌎", "🐴", "📖", "🌚", "🎵", "🍍", "🐠", "❣️", "🐢", "🐹", "👋", 
"🐯", "🚲", "⚡", "🌍", "😑", "😪", "✋", "😐", "🌏", "😶", "💉", "🐍", "🍆", "😕", "👐", "✊", "🚬", "🔑", "😮", "💊", "🙀", "🤑", 
"😯", "🤐", "💔"];

const allEmojis = ["🐶", "🌸", "📷", "🌞", "☕", "👑", "🌹", "😜", "🐱", "💅", "😭", "🎄", "🍁", "🍓", "🌊", "🍺", "❄️", "🐾", "🐷",
"🍴", "✈️", "🐈", "✨", "🎧", "🎃", "🍷", "🌴", "👀", "🎶", "🐰", "🍑", "📸", "🍕", "👻", "⚽", "🐕", "😈", "💄", "🍰", "💎", "💐",
"🌺", "🐻", "🍦", "😅", "🌙", "🍀", "😝", "🎀", "✌️", "😴", "👊", "🎨", "🍫", "💍", "🍔", "🍂", "🦄", "🌻", "🌿", "🎈", "🤘", "📚",
"🍜", "🌷", "🌼", "🐼", "🐟", "🚗", "☁️", "👙", "🍃", "🍹", "🙊", "🎤", "🍣", "🌲", "👅", "💦", "🌳", "👽", "🐩", "🤓", "🍸", "🏀",
"🌵", "🌱", "🍩", "🍒", "🌟", "😳", "💤", "🐝", "👟", "🙃", "👠", "🌎", "🐴", "📖", "🌚", "🎵", "🍍", "🐠", "❣️", "🐢", "🐹", "👋",
"🐯", "🚲", "⚡", "🌍", "😑", "😪", "✋", "😐", "🌏", "😶", "💉", "🐍", "🍆", "😕", "👐", "✊", "🚬", "🔑", "😮", "💊", "🙀", "🤑",
"😯", "🤐", "💔", "😢", "😱", "🤔", "💀", "😔", "🙄", "💩", "😩", "😬", "😒", "😞", "😷", "🖕", "😥", "😤", "😡", "😫", "😣", "😨",
"😓", "😵", "😲", "😰", "😖", "👿", "😠", "😧", "👎", "🤒", "😿", "😟", "☹️", "🙁", "🤕", "😾", "😦", "❤️", "😍", "😂", "💕", "😘",
"😊", "😎", "👍", "💋", "💙", "😋", "😉", "💪", "🙏", "☀️", "💯", "💖", "💗", "🔥", "👌", "😁", "💓", "🎂", "🙈", "🍻", "😻", "💚",
"😄", "😀", "😆", "🌈", "💛", "🤗", "🎁", "🎉", "♥️", "😇", "🔝", "🙌", "☺️", "😃", "😏", "👏", "😚", "😙", "💘", "😌", "💝", "💟",
"🍾", "😛", "😺", "🙂", "🏆", "😗", "😸", "💜", "😽", "😹", "😼", "🙉"];

//FUNCTIONS --------------------------------------------------------------------

// determine how many emojis a tweet contains
function containsEmoji(tweet, emojis) {

	let count = 0;

	for(let i = 0; i < allEmojis.length; i++) {
		if(tweet.includes(allEmojis[i])) {
			count += 1; 
		}
	}

	return count; 
}

//Devide the tweets based on containing one, or two+more emojis
function filterTweets(rawTweets, emojis, arrayOne, arrayTwo) {

	for(let i = 0; i < rawTweets.length; i++) {
		if(containsEmoji(rawTweets[i], emojis) === 1) {
			arrayOne.push(rawTweets[i]); 
		} else if(containsEmoji(rawTweets[i], emojis) >= 2) {
			arrayTwo.push(rawTweets[i]); 
		}
	}
};

// Count the sentiment for tweets with ONE emoji
function countSentimentOne(tweetArray, sentiment) {
	let count = 0;

	for(let i = 0; i < sentiment.length; i++) {
		for(let x = 0; x < tweetArray.length; x++) {

			if(tweetArray[x].includes(sentiment[i])) {
				count += 1;
			}
		}
	}
	return count;
}

// Determine sentiment for a tweet with two+more emojis
function determineSentimentTwo(tweet, posEmos, negEmos, neuEmos) {
	
	// containers for emoji count 
	let amountPos = 0; 
	let amountNeg = 0;
	let amountNeu = 0;

	// count positives
	for(let i = 0; i < posEmos.length; i++) {
		if(tweet.includes(posEmos[i])) { amountPos += 1; }
	}

	//count negatives
	for(let i = 0; i < negEmos.length; i++) {
		if(tweet.includes(negEmos[i])) { amountNeg += 1; }
	}

	// count neutrals
	for(let i = 0; i < neuEmos.length; i++) {
		if(tweet.includes(neuEmos[i])) { amountNeu += 1; }
	}

	//use the variables declared above to determine sentiment of tweet 
	if(amountPos === 2 || amountPos === 1 && amountNeu === 1 || amountPos > 2 && amountPos > amountNeg && amountPos > amountNeu) {
		return 1; 
	} else if(amountNeg === 2 || amountNeg === 1 && amountNeu === 1 || amountNeg > 2 && amountNeg > amountPos && amountNeg > amountNeu) {
		return -1; 
	} else if (amountNeu === 2 || amountNeu > 2 && amountNeu > amountNeg && amountNeu > amountPos || amountPos === 1 && amountNeg === 1 && amountNeu === 1 || amountPos === 1 && amountNeg === 1) {
		return 0;
	} else {
		console.log(`Not assigned with pos = ${amountPos}, neg = ${amountNeg}, neu = ${amountNeu}`)
		return "unknown";
	}
}

// count the tweets with a specific sentiment
// (needs all the emoji arrays, the tweets and the sentiment is is used to count)
function countSentimentTwo(tweetArray, posEmosArray, negEmosArray, neuEmosArray, sentiment) {

	let counter = 0;
	let calcValue = 100; // set to rediculous number 

	// check for which sentiment count the function is used 
	if(sentiment === "pos") {
		calcValue = 1; 
	} else if(sentiment === "neg") {
		calcValue = -1; 
	} else if(sentiment === "neu") {
		calcValue = 0; 
	} else if(sentiment === "no") {
		calcValue = "unknown";
	}

	// loop over the array with tweets that contain two emojis and determine sentiment
	for(let i = 0; i < tweetArray.length; i++) {
		if(determineSentimentTwo(tweetArray[i], posEmosArray, negEmosArray, neuEmosArray) === calcValue) {
			counter += 1;
		}
	}
	return counter;
}; 

//export all arrays and functions 
module.exports = {
	negativeEmojis: negativeEmojis,
	positiveEmojis: positiveEmojis,
	neutralEmojis: neutralEmojis,
	allEmojis: allEmojis,
	containsEmoji: containsEmoji, 
	filterTweets: filterTweets,
	countSentimentOne: countSentimentOne,
	determineSentimentTwo: determineSentimentTwo,
	countSentimentTwo: countSentimentTwo
}