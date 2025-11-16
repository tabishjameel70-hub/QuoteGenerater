import React, { useState } from 'react'

const Quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Strive not to be a success, but rather to be of value. – Albert Einstein",
  "The journey of a thousand miles begins with a single step. – Lao Tzu",
  "That which does not kill us makes us stronger. – Friedrich Nietzsche",
  "If you are going through hell, keep going. – Winston Churchill",
  "The mind is everything. What you think you become. – Buddha",
  "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
  "An unexamined life is not worth living. – Socrates",
  "Eighty percent of success is showing up. – Woody Allen",
  "It is never too late to be what you might have been. – George Eliot",
  "The purpose of our lives is to be happy. – Dalai Lama",
  "You must be the change you wish to see in the world. – Mahatma Gandhi",
  "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost",
  "Imagination is the beginning of creation. – George Bernard Shaw",
  "Where there is love there is life. – Mahatma Gandhi",
  "The only true wisdom is in knowing you know nothing. – Socrates",
  "Don't count the days, make the days count. – Muhammad Ali",
  "Not all those who wander are lost. – J.R.R. Tolkien",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
  "A room without books is like a body without a soul. – Marcus Tullius Cicero",
  "We accept the love we think we deserve. – Stephen Chbosky",
  "I have not failed. I've just found 10,000 ways that won't work. – Thomas A. Edison",
  "No one can make you feel inferior without your consent. – Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "Be the change that you wish to see in the world. – Mahatma Gandhi",
  "Life is like a box of chocolates. You never know what you're gonna get. – Forrest Gump (Character)",
  "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
  "Happiness is not something readymade. It comes from your own actions. – Dalai Lama",
  "You only live once, but if you do it right, once is enough. – Mae West",
  "Our greatest glory is not in never falling, but in rising every time we fall. – Confucius",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "The best revenge is massive success. – Frank Sinatra",
  "Change your thoughts and you change your world. – Norman Vincent Peale",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "It is better to be hated for what you are than to be loved for what you are not. – André Gide",
  "May the Force be with you. – Star Wars (Various Characters)",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Elementary, my dear Watson. – Sherlock Holmes (Character)",
  "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. – Maya Angelou",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. – Martin Luther King Jr.",
  "The question isn't who is going to let me; it's who is going to stop me. – Ayn Rand",
  "Frankly, my dear, I don't give a damn. – Rhett Butler (Character)",
  "The only thing necessary for the triumph of evil is for good men to do nothing. – Edmund Burke",
  "The price of anything is the amount of life you exchange for it. – Henry David Thoreau",
  "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
  "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
  "This too shall pass. – Persian Sufi Proverb",
  "We are all in the gutter, but some of us are looking at the stars. – Oscar Wilde",
  "I am not a product of my circumstances. I am a product of my decisions. – Stephen Covey"
]
const App = () => {
  const [Quote, setQuote] = useState("click button to generate quotes!");
  const UpDateQuotes =()=> {
  const randmIDX = Math.floor(Math.random()*Quotes.length);
  return setQuote(Quotes[randmIDX]);
}
  return (
    <>
    <div className='h-86 w-120 flex justify-center items-center flex-col'>
       <h1 className='text-3xl'>Random QuoteGenerater!</h1>
       <h5 className='text-2xl'>{Quote}</h5>
     <button className='h-20 w-25 rounded-1xl' onClick={UpDateQuotes}>Click me!</button>
    </div>
    </>
  )
}

export default App
