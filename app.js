const search = document.querySelector(".search"),
  btn = document.querySelector(".btn");
const input = $(".input"),
  quote = $("#quote"),
  author = $("#author");

function randomPicker(array) {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

input.keydown((e) => {
  const { keyCode } = e;

  if (keyCode === 13) {
    $.get(`https://quotable.io/search/quotes?query=${input.val()}`, (data) => {
      const selectedQuote = randomPicker(data.results);
      quote.empty();
      quote.append(`<p>${selectedQuote.content}</p>`);
      author.text(selectedQuote.author);
      input.val("");
      search.classList.toggle("active");
    });

    document.querySelector(".quote-card").classList.add("visible");
  }
});
