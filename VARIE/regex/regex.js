console.log(`\n>>\n>> Regex \n>>`);

let regex;
regex = new RegExp("", ""); // (pattern, flag)
regex = /Edo/gi; //  /pattern/flag

let stringa = "ciao sono edo";

const ris = stringa.match(regex);

console.log(stringa.match(regex));
console.log(stringa.replace(regex, 'aaa'));
console.log(regex.test(stringa));

// Classi di caratteri \d \s \w

console.log(`\n>>\n>> Classi di caratteri \\d \\s \\w \n>>`);

stringa = "ciao _ sono le-2";

regex = /\d/g; //  Digit
console.log(stringa.replace(regex,'X')); //ciao _ sono le-X

regex = /\s/g; //  Space
console.log(stringa.replace(regex,'X')); //ciaoX_XsonoXle-2

regex = /\w/g; //  azAZ 09 _ (sono esclusi gli spazi e tutti gli altri caratteri)
console.log(stringa.replace(regex,'X')); //ciao sono le AAA

regex = /\D/g; //  Negazione: cerca tutto ciò che non è digit
console.log(stringa.replace(regex,'X')); //XXXXXXXXXXXXXXX2

regex = /\S/g; //  Negazione: cerca tutto ciò che non è spazi
console.log(stringa.replace(regex,'X')); //XXXX X XXXX XXXX

regex = /\W/g; //  Negazione: cerca tutto ciò che non è azAZ 09 _ (quindi gli spazi e tutti gli altri caratteri)
console.log(stringa.replace(regex,'X')); //ciaoX_XsonoXleX2


// Ancore ^: ancorano alcuni caratteri in certe posizioni
console.log(`\n>>\n>> Ancore ^inizia $finisce\n>>`);

regex = /^c/;
console.log(stringa.match(regex)); //
console.log(stringa.replace(regex,'X')); // Xao _ sono le-2

regex = /^\w/;
console.log(stringa.match(regex)); //
console.log(stringa.replace(regex,'X')); // Xao _ sono le-2

regex = /-2$/;
console.log(stringa.match(regex)); //
console.log(stringa.replace(regex,'X')); // ciao _ sono leX

console.log(`\n>>\n>> ORARI con Ancore ^inizia $finisce\n>>`);

const orario = "15:48";
regex = /^\d\d:\d\d/;  // ma anche:
regex = /^\d\d:\d\d$/;

console.log(orario.match(regex)); //
console.log(orario.replace(regex,'X')); // X

console.log(`\n>>\n>> MULTILINEA Ancore ^inizia $finisce\n>>`);

stringa = `1st Mario
2nd Luca
3nd Edo`;

regex = /^\d/;  regex = /^\d/g;  
console.log(stringa.match(regex)); 
console.log(stringa.replace(regex,'X')); 
/*
Xst Mario
2nd Luca
3nd Edo
*/

regex = /^\d/gm;  
console.log(stringa.match(regex));
console.log(stringa.replace(regex,'X')); 

/*
Xst Mario
Xnd Luca
Xnd Edo
*/

console.log(`\n>>\n>> Boundary \\b Cerca parole >>`);

stringa = `Ciao sono java e javascript`;

regex = /java/g;  
console.log(stringa.match(regex)); 
console.log(stringa.replace(regex,'X'));  // Ciao sono X e Xscript

regex = /\bjava/g;  
console.log(stringa.match(regex)); 
console.log(stringa.replace(regex,'X'));  // Ciao sono X e Xscript

regex = /\bjava\b/g;  
console.log(stringa.match(regex)); 
console.log(stringa.replace(regex,'X'));  // Ciao sono X e javascript


console.log(`\n>>\n>> Set e Range >>`);

stringa = "Dino Rino Pino Gino Pinotto"
regex = /[dg]ino/ig; 
console.log(stringa.match(regex)); 
console.log(stringa.replace(regex,'X'));  //  X Rino Pino X Pinotto

regex = /[a-z]ino/ig; 
console.log(stringa.match(regex)); 
console.log(stringa.replace(regex,'X'));  //  X X X X Xtto

regex = /[^dg]ino/ig;  // ESCLUSIONE dalla ricerca e dalla sostituzione
console.log(stringa.match(regex)); 
console.log(stringa.replace(regex,'X'));  //  Dino X X Gino Xtto




