const fs = require("fs");

const FILE_PATH = "./public/_redirects";

const template = `/*  /index.tsx  200`;

fs.writeFile(FILE_PATH, template, (e) => {
  if (e) {
    throw new Error(e);
  }
  console.log("Netlify Config file has generated.");
});
