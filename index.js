const fileSystem = require("fs");

exports.writeBoilerplate = writeBoilerplate;

function writeBoilerplate() {
  const html5 = fileSystem.readFileSync(`${__dirname}/index.html`);

  const folderName = process.argv[2];

  fileSystem.mkdirSync(`./${folderName}`);
  fileSystem.writeFileSync(`${process.cwd()}/${folderName}/index.html`, html5);
  fileSystem.writeFileSync(
    `${process.cwd()}/${folderName}/index.js`,
    "// Enjoy"
  );
  fileSystem.writeFileSync(
    `${process.cwd()}/${folderName}/styles.css`,
    "/* Enjoy */"
  );
}

// writeBoilerplate();
