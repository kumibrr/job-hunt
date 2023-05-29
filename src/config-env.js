import { writeFile } from "node:fs";

let apiURL = process.env["URL"];
let targetPath = `./src/environments/environment.ts`;

const envConfigFile = `
export const environment = {
  production: false,
  url: "${apiURL}",
  client_id: "${process.env["CLIENT_ID"]}",
  client_secret: "${process.env["CLIENT_SECRET"]}",
  client_idsec: "${process.env["CLIENT_IDSEC"]}}"
};`;

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log(err);
  }
});
