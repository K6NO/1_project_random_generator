/**
* Random Quote Generator / K6NO
*/

var quotes = [
    {
        quote: "Success is most often achieved by those who don't know that failure is inevitable.",
        source: "Coco Chanel",
        tags: ["humour", "success"]
    },

    {
        quote: "Things work out best for those who make the best of how things work out.",
        source: "John Wooden",
        tags: ["lifestyle", "humour"]
    },
    {
        quote: "Courage is grace under pressure.",
        source: "Ernest Hemingway",
        tags: ["old but gold", "lifestyle"]
    },
    {
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        source: "Jim Rohn",
        tags: ["success"]
    },

    {
        quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
        source: "Albert Einstein",
        tags: ["success", "lifestyle"]
    },
    {
        quote: "Take up one idea. Make that one idea your life -- think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success.",
        source: "Swami Vivekananda",
        tags: ["success", "long"]
    },
    {
        quote: "Sometimes you can't see yourself clearly until you see yourself through the eyes of others.",
        source: "Ellen DeGeneres",
        tags: ["self reflection", "psychology"]
    },
    {
        quote: "All our dreams can come true if we have the courage to pursue them.",
        source: "Walt Disney",
        tags: ["dreams", "success"]
    },
    {
        quote: "It does not matter how slowly you go, so long as you do not stop.",
        source: "Confucius",
        tags: ["Chinese", "inspirational"]
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        source: "Winston Churchill",
        tags: ["success", "old but gold"]
    },
];

var quotesDisplayed = [];
var interval;


/**
 * Method calls getRandomQuote, displays HTML, calls randomizeBackgroundColor and randomizeTagColor
 */
const printQuote = () => {

    var quoteToDisplay = getRandomQuote();
    var HTMLmessage = '';
    HTMLmessage += '<p class="quote">' + quoteToDisplay.quote + '</p>';
    HTMLmessage += '<p class="source">' + quoteToDisplay.source + '</p>';
    for (var i=0; i<quoteToDisplay.tags.length; i+=1) {
        HTMLmessage += '<span class="tag" id="tag">' + quoteToDisplay.tags[i] + '</span>';
    }

    randomizeBackgroundColor();
    document.getElementById('quote-box').innerHTML = HTMLmessage;
    randomizeTagColor();

}
/**
 * Method returns a random quote object only if it has not been added to the quotesDisplayed list. When the quotesDisplayed list's size
 * reaches the size of the quotes array all its content is deleted.
 * @returns {{quote, source, tags}|*}
 */
const getRandomQuote = () => {

    if (quotesDisplayed.length === quotes.length) {
        quotesDisplayed = [];
    }

    var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    console.log('Random quote generated: ' + randomQuoteIndex + ". " + quotes[randomQuoteIndex].quote);

    if (quotesDisplayed.indexOf(randomQuoteIndex) === -1) {
        quotesDisplayed.push(randomQuoteIndex);
        console.log('Index of the quotes displayed so far: ' + quotesDisplayed);
        return quotes[randomQuoteIndex];
    } else {
        console.log('This quote has already been displayed. Click for another!');
    }
}

/**
 * returns a random hexadecimal value
 * @returns {string}
 */
const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i=0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * sets the background color of the body element (with id='background')
 */
const randomizeBackgroundColor = () => document.getElementById('background').style.background = getRandomColor();

/**
 * randomizes the color of the tags
 */
const randomizeTagColor = () => document.getElementById('tag').style.background = getRandomColor();


/**
 * Automatically refreshes the quote in every 30 seconds. Called in <body onload="">
 */
const refreshQuoteAutomatically = () => interval = setInterval(printQuote, 30000);

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
