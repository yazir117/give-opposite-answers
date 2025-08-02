function giveOppositeAnswer() {
  const input = document.getElementById("question").value.toLowerCase();
  const responseDiv = document.getElementById("response");

  // Opposite word mappings
  const opposites = {
    "yes": "no",
    "no": "yes",
    "hot": "cold",
    "cold": "hot",
    "up": "down",
    "down": "up",
    "left": "right",
    "right": "left",
    "good": "bad",
    "bad": "good",
    "true": "false",
    "false": "true",
    "study": "sleep",
    "work": "rest",
    "day": "night",
    "light": "dark"
  };

  let response = input;

  // Replace words with their opposites
  for (let word in opposites) {
    let regex = new RegExp(`\\b${word}\\b`, 'gi');
    response = response.replace(regex, opposites[word]);
  }

  // If no known words matched, use random sarcastic response
  if (response === input) {
    const sarcastic = [
      "Ayin ni ethada?",
      "po mone dinesha!",
      "ya howluwala",
      "don't try to play fool with me! ",
      "nammal anaathar ahn ennal gundakalalla!",
      "chenda poi kathi kitty dum dum dum!"
    ];
    response = sarcastic[Math.floor(Math.random() * sarcastic.length)];
  }

  // Reset animation
  responseDiv.classList.remove("show");
  void responseDiv.offsetWidth; // force reflow
  responseDiv.innerText = response;
  responseDiv.classList.add("show");

  // Play sound
  const audio = new Audio("ding.mp3");
  audio.play();
}
