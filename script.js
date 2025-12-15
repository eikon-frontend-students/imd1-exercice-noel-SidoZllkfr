const links = [
  "https://www.totallyuselesswebsites.com/",
  "https://www.iamaturtle.org/",
  "https://www.window-swap.com/",
  "http://www.doughnutkitten.com/",
  "https://stoplookingatmyscreen.com/",
  "https://www.dramabutton.com/",
  "https://www.emojitracker.com/",
  "https://paveldogreat.github.io/WebGL-Fluid-Simulation/",
  "https://more.playables.net/",

  "https://patatap.com/",
  "https://anythingtranslate.com/translators/posh-english-translator/",
  "https://anythingtranslate.com/translators/jealous-language-translator/",
  "https://spiralbetty.com/",
  "https://spinthewheel.app/good-or-evil-2xlI",
  "https://theuselessweb.com/",
  "http://www.staggeringbeauty.com/",
  "https://www.lennyfaceguru.com/",
];

document.getElementById("boredBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * links.length);
  const randomUrl = links[randomIndex];
  window.open(randomUrl, "_blank");
});
