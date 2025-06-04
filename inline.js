/* eslint-env node */
import fs from "fs";
import path from "path";

// caminho raiz do projeto
const rootDir = process.cwd(); 
const gasDir  = path.join(rootDir, "gas");
const distDir = path.join(rootDir, "dist");
const assetsDir = path.join(distDir, "assets");

// garante que exista a pasta "gas"
if (!fs.existsSync(gasDir)) {
  fs.mkdirSync(gasDir);
  console.log("Created gas directory.");
}

// pega o arquivo mais recente com determinada extensão
function findLatestFile(dir, ext) {
  const files = fs.readdirSync(dir);
  return files
    .filter(f => f.endsWith(ext))
    .sort()
    .pop() ?? null;
}

const jsFile  = findLatestFile(assetsDir, ".js");
const cssFile = findLatestFile(assetsDir, ".css");

if (!jsFile || !cssFile) {
  console.error("JavaScript or CSS file not found in the assets directory.");
  process.exit(1);
}

// lê o conteúdo puro
const jsContent  = fs.readFileSync(path.join(assetsDir, jsFile),  "utf8");
const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), "utf8");

// **ATENÇÃO**: aqui é a única mudança necessária.
// adicionamos `type="module"` para que o bundle seja executado como ES Module.
const jsHtml = `<script type="module">\n${jsContent}\n</script>`;
const cssHtml = `<style>\n${cssContent}\n</style>`;

// escreve nos arquivos que o Apps Script vai incluir
fs.writeFileSync(path.join(gasDir, "js.html"),  jsHtml,  "utf8");
fs.writeFileSync(path.join(gasDir, "css.html"), cssHtml, "utf8");

console.log("Created js.html and css.html in the gas directory successfully!");
