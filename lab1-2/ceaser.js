const fs = require("fs");

function caesarEncrypt(text, shift) {
  return text.split("").map(ch => {
    const code = ch.charCodeAt(0);
    return String.fromCharCode((code + shift) % 65536);
  }).join("");
}

function caesarDecrypt(text, shift) {
  return text.split("").map(ch => {
    const code = ch.charCodeAt(0);
    return String.fromCharCode((code - shift + 65536) % 65536);
  }).join("");
}

const textfile = fs.readFileSync("input.txt", "utf8");

const shift = 5; 

const encrypted = caesarEncrypt(textfile, shift);
fs.writeFileSync("encrypted_caesar.txt", encrypted, "utf8");

const decrypted = caesarDecrypt(encrypted, shift);
fs.writeFileSync("decrypted_caesar.txt", decrypted, "utf8");

console.log("✅ Шифр Цезаря завершено!");