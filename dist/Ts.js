"use strict";
// const express = require("express");
// const cors = require("cors");
// const app = express();
// // باقي الكود هنا
// const corsOptions = {
//   origin: "/data.json", // يمكنك تحديد مواقع محددة هنا
//   optionsSuccessStatus: 200, // بعض المتصفحات تحتاج إلى هذا لتأكيد أن الطلب نجح
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // الطرق المسموح بها
//   allowedHeaders: "Content-Type,Authorization", // الرؤ
// };
// app.use(cors(corsOptions));
// console.log(app.use(cors(corsOptions)));
let MyId = document.querySelector(`.id`);
let Aya = document.querySelector(`.Aya`);
let click = document.querySelector(`.click`);
let names = document.querySelector(`.name`);
let sound = document.querySelector(`.sound`);
click.addEventListener(`click`, () => {
    fetch("data.json")
        .then((e) => e.json())
        .then((e) => {
        console.log(e);
        let one = Math.ceil(Math.random() * 113);
        let len = e.data.surahs[one].ayahs.length;
        let qran = e.data.surahs[one].ayahs[Math.floor(Math.random() * len)];
        sound.src = qran.audio;
        Aya.innerHTML = qran.text;
        MyId.innerHTML = len;
        names.innerHTML = e.data.surahs[one].name;
    });
});
fetch("data.json")
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
