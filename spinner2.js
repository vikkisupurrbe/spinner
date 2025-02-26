process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\n']

let timer = 100;
for (const char of spinnerArr) {
  setTimeout(() => {process.stdout.write(char);}, timer += 200);
}