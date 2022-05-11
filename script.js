let quoteContent = document.querySelector(".content");
let author = document.querySelector(".blockquote-footer");

let button = document.querySelector(".btn");
button.addEventListener("click", RandomQuote);
RandomQuote();
 async function RandomQuote() {
  button.innerHTML = "Quote loading...";
  button.classList.add("event");
  let url = "https://api.quotable.io/random?tags=technology";
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      quoteContent.innerHTML = res.content;
      author.innerHTML = res.author;
      button.innerHTML = "New Quote";
      button.classList.remove("event");
    });
}
let speak = document.querySelector(".bi-volume-up");
speak.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(`${quoteContent.innerHTML} by ${author.innerHTML}`);
  speechSynthesis.speak(utterance);
});
let copy = document.querySelector(".bi-clipboard");
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteContent.innerHTML);
});
let share = document.querySelector(".bi-twitter");
share.addEventListener("click", () => {
    let url= `https://twitter.com/intent/tweet?text=${quoteContent.innerHTML}`
    window.open(url,'_blank')

})
