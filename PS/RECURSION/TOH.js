
/** @DESCRIPTION - BELOW METHOD WILL HELP IN PRINTING THE PATTERN */

const printTOH = (n, src, aux, des) => {
   if (n === 0) return;
   printTOH(n -1, src, des, aux);
   console.log(`${src} ----> ${des}`);
   printTOH(n -1, aux, src, des);
};

console.log(printTOH(3, 'S', 'A', 'D'));