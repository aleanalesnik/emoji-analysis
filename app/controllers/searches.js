// CONTROLLERS -- searches.js

// DEPENDENCIES & MODULES 
const express = require('express');
const router = express.Router();
const model = require('../models');
const analyzer = require('./functions');
const Twit = require('promised-twit');

const T = new Twit({
  consumer_key:         '6fjlsVdPm5mFqkt1n20FsdFDi',
  consumer_secret:      'ztwfO82IDrHI9gsT9pt4kwAACw7V2pUWUpKgGuScssinGThcFH',
  access_token:         '931538618430185473-M15tXu8tEf3fPdl45KwQrLQKb2wSuo6',
  access_token_secret:  '03mxnuMHTPgqiwXtcvcXaOfFhRJm1npCVTzvGATpdXGcl',
});


//----------ROUTING----------

// POST ACTION "SEARCH"
router.post('/search', function(req, res) {

	T.get('search/tweets', { q: `${req.body.q} AND 😄 OR 😁 OR 😂 OR 💕 OR 😎 OR ❤️ OR 🔝 OR 👍 OR 😊 OR 👏 OR 😃 OR ☺️ OR 👌 OR 😍 OR 😀 
	 🖕 OR 💩 OR 😞 OR 😩 OR 😵 OR 😫 OR 😤 OR 😡 OR 👎 OR 💀 OR 😰 OR 😔 OR 😢 OR 💔 OR 🤔 OR 🎶 OR ✌️ OR 👋 OR 😬 OR 👻 OR 🦄 OR ✈️ OR 
	 🌴 OR 👀 OR 😳 OR 🙊 OR 😜 OR 😭 OR 👽 OR 😐 OR 😶 -filter:retweets`, tweet_mode: 'extended', count: 100 }).then( data => {
		
		const tweets = data.data.statuses.map(i => i.full_text); // map all the actual tweet-texts into an array

		console.log(tweets);

		// Declare arrays for the tweets with certain amount of emojis
		let one = [];
		let twoOrMore = [];

		analyzer.filterTweets(tweets, analyzer.allEmojis, one, twoOrMore); //filter the tweets based on the amount of emojis they contain

		console.log('TOTAL AMOUNT OF TWEETS: ' + tweets.length + 'OF WHICH ' + one.length + 'CONTAIN ONE AND ' + twoOrMore.length + 'CONTAIN TWO OR MORE.');

		// calculate the sentiments for the tweets containing one and two or more emojis
		const positive = analyzer.countSentimentOne(one, analyzer.positiveEmojis) + analyzer.countSentimentTwo(twoOrMore, analyzer.positiveEmojis, analyzer.negativeEmojis, analyzer.neutralEmojis, "pos");
		const negative = analyzer.countSentimentOne(one, analyzer.negativeEmojis) + analyzer.countSentimentTwo(twoOrMore, analyzer.positiveEmojis, analyzer.negativeEmojis, analyzer.neutralEmojis, "neg");
		const neutral = analyzer.countSentimentOne(one, analyzer.neutralEmojis) + analyzer.countSentimentTwo(twoOrMore, analyzer.positiveEmojis, analyzer.negativeEmojis, analyzer.neutralEmojis, "neu");
		const errors = analyzer.countSentimentTwo(twoOrMore, analyzer.positiveEmojis, analyzer.negativeEmojis, analyzer.neutralEmojis, "no");

		const outcome = {
			tweets: tweets,
			query: req.body.q,
			total: tweets.length,
			one: one.length,
			twoPlus: twoOrMore.length,
			positive: Math.round((positive/(tweets.length-errors)*100)),
			negative: Math.round((negative/(tweets.length-errors)*100)),
			neutral: Math.round((neutral/(tweets.length-errors)*100)),
			error: analyzer.countSentimentTwo(twoOrMore, analyzer.positiveEmojis, analyzer.negativeEmojis, analyzer.neutralEmojis, "no")
		}
		
		console.log(`${outcome.positive} were pos, ${outcome.negative} were neg, ${outcome.neutral} were neutral`);
		console.log(`There were ${outcome.error} unnasigned tweets`)

		return outcome;

		//log the outcome 
		// console.log(`${total-error} out of ${total} tweets were analysed. ${} percent was negative, ${Math.round((positive/(total-error))*100)} percent was positive and ${Math.round((neutral/(total-error))*100)} percent was neutral.`);
	})
	.then( result => {
		res.render('results', {result: result, session: req.session.user});
	})
	.catch(e => console.error(e.stack));
}); 


module.exports = router;