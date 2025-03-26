function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0d4of6b0264e6b2a0aa2t7471209213f";
  let prompt = `User instructions: Generate a Greek poem about ${instructionsInput}`;
  let context =
    "You are a romatic poem expert and love to write short poems.Your mission is to generate a 4 line poem translated to english in basic HTML . Make sure to follow the user instructions.Do not include the title or the ```html and only show the poem in english language.Sign the poem with 'SheCodes AI' inside <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
