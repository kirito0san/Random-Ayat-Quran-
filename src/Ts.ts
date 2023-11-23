let MyId = document.querySelector(`.id`) as HTMLSpanElement;
let Aya = document.querySelector(`.Aya`) as HTMLParagraphElement;
let click = document.querySelector(`.click`) as HTMLImageElement;
let names = document.querySelector(`.name`) as HTMLParagraphElement;
let sound = document.querySelector(`.sound`) as HTMLAudioElement;
click.addEventListener(`click`, () => {
  fetch("https://api.alquran.cloud/v1/quran/ar.alafasy")
    .then((e) => e.json())
    .then((e) => {
      let one = Math.ceil(Math.random() * 113);
      let len = e.data.surahs[one].ayahs.length;
      let qran = e.data.surahs[one].ayahs[Math.floor(Math.random() * len)];
      sound.src = qran.audio;
      Aya.innerHTML = qran.text;
      MyId.innerHTML = len;
      names.innerHTML = e.data.surahs[one].name;
    });
});
fetch("https://api.alquran.cloud/v1/quran/ar.alafasy")
  .then((e) => e.json())
  .then((e) => {
    let one = Math.ceil(Math.random() * 113);
    let len = e.data.surahs[one].ayahs.length;
    let qran = e.data.surahs[one].ayahs[Math.floor(Math.random() * len)];
    sound.src = qran.audio;
    Aya.innerHTML = qran.text;
    MyId.innerHTML = len;
    names.innerHTML = e.data.surahs[one].name;
  });
