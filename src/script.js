function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Deep within halls of ancient, and dead Greek gods",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
