const fs = require("fs");

function encryptPermutation(text, blocksize) {
  let res = "";
  for (let i = 0; i < text.length; i += blocksize) {
    const block = text.slice(i, i + blocksize);
    res += block.split("").reverse().join("");
  }
  return res;
}

function decryptPermutation(text, blocksize) {

  return encryptPermutation(text, blocksize);

}

const blocksize = 6;
const textfile = fs.readFileSync("input.txt", "utf8");

const encrypted = encryptPermutation(textfile, blocksize);
fs.writeFileSync("encrypted.txt", encrypted, "utf8");

const decrypted = decryptPermutation(encrypted, blocksize);
fs.writeFileSync("decrypted.txt", decrypted, "utf8");

console.log("✅ Перестановка завершена.");