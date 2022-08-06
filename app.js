const search = document.querySelector(".search"),
  btn = document.querySelector(".btn");
const input = $(".input"),
  quoteP = $("#quote"),
  author = $("#author");

function randomPicker(array) {
  const idx = Math.floor(Math.random() * array.length);
  return array[idx];
}

function updateDOM(data) {
  const quoteParagraph = $("#quote"),
    author = $("#author"),
    quoteCard = $(".quote-card");

  quoteParagraph.empty();
  quoteParagraph.append(`<p>${data.content}</p>`);
  author.text(data.author);
  quoteCard.attr("class", "quote-card visible");

  input.val("");
  search.classList.toggle("active");
}

function searchAndUpdate(event) {
  if (event.keyCode === 13) {
    $.get(`https://quotable.io/search/quotes?query=${input.val()}`, (data) => {
      const selectedQuote = randomPicker(data?.results);
      updateDOM(selectedQuote);
    });
  }
}

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

input.keydown(searchAndUpdate);
