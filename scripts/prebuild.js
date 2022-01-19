const fs = require("fs");
const env = process.argv[2].trim();

if (!env) {
  throw new Error(
    "\n\n" +
      "This command must required an argument. Try again like below,\n\n" +
      "> node prebuild.js development" +
      "\n\n"
  );
}

if (env !== "development" && env !== "staging" && env !== "production") {
  throw new Error(
    "\n\n" +
      'The argument must be one of "development", "staging" or "production"' +
      "\n\n"
  );
}

const template = `{
  "RN_ENV": "${env}"
}`;

fs.writeFile("./src/config.json", template, (e) => {
  if (e) {
    throw new Error(e);
  }
  console.log("Configuration file has generated.");
});
