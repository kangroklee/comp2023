quotes = [
    {
        quote: "Life is short, Break the Rules. Forgive quickly, Kiss slowly. Love truly. Laugh uncontrollably And never regret ANYTHING That makes you smile.",
        author: "Mark Twain"
    },
    {
        quote: "Life is like a camera. Focus on what's important. Capture the good times. And if things don't work out, just take another shot.",
        author: "Ziad K. Abdelnour"
    },
    {
        quote: "The happiness of your life depends upon the quality of your thoughts.",
        author: "Marcus Aurelius"
    },
    {
        quote: "Life is too deep for words, so don't try to describe it, just live it.",
        author: "C. S. Lewis"
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or objects.",
        author: "Albert Einstein"
    },
    {
        quote: "Blessed are they who see beautiful things in humble places where other people see nothing.",
        author: "Camille Pissarro"
    },
    {
        quote: "Be comforted, dear soul! There is always light behind the clouds.",
        author: "Louisa May Alcott"
    },
    {
        quote: "Life is not meant to be easy, my child; but take courage: it can be delightful.",
        author: "George Bernard Shaw"
    },
    {
        quote: "Enjoy the little things, for one day you may look back and realize they were the big things.",
        author: "Robert Breault"
    },
    {
        quote: "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
        author: "Albert Camus"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const index = Math.floor(Math.random()*(quotes.length));
const todaysQuote = quotes[index];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

