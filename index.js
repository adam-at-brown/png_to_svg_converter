const potrace = require('potrace')
const fs = require('fs');
const path = require('path')
const chalk = require('chalk')

const dir_path = path.dirname(process.cwd())
const [directory] = process.argv.slice(2);

if (!directory) console.error('\n%s You must include the folder name you wish to convert the contents of.\n', chalk.red.bold('ERROR'))

const directory_name = `${dir_path}/${directory}`
const filenames = fs.readdirSync(directory_name)

const filteredFiles = filenames.filter(i => i.indexOf(".png") !== -1)

if(filteredFiles.length === 0) console.log(chalk.blue.bold("\nNo .png file in the folder to convert.\n"))

filteredFiles.forEach((file) => {
  potrace.trace(`${directory_name}/${file}`, function(err, svg) {
    if (err) throw err;
    console.log(`%s${file}`, chalk.blue.bold("Converting "))
    fs.writeFileSync(`./output/${file.replace(/\.[^/.]+$/, "")}.svg`, svg)
  });
});

console.log(chalk.green("\nConverted Files will be in the 'output' folder.\n"))
