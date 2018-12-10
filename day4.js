//day 4 (http://adventofcode.com/day/4)

//get md5 code from https://cdn.jsdelivr.net/gh/emn178/js-md5@master/src/md5.js

//part 1: find number that starts with 5 '0's
var key = "bgvyzdsv";
var i = 0;
var hash = md5(key + i)

while(!hash.startsWith("00000")) {
	i++;
	hash = md5(key + i);
}

console.log(i); //254575

//part 2: find number that starts with 6 '0's
i = 0, hash = md5(key + i);
while(!hash.startsWith("000000")) {
	i++;
	hash = md5(key + i);
}

console.log(i); //1038736