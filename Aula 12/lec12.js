let varA = "A";
let varB = "B";
let varC = "C";

const backupA = varA;
const backupC = varC;

varA = varB;
varB = backupC;
varC = backupA;

console.log(varA, varB, varC);
