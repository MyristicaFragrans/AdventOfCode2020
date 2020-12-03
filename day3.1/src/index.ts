import fs from 'fs';
import path from 'path';

var dataset:string[] = [];
dataset = fs.readFileSync(path.join(__dirname,'../dataset.txt'),{encoding:'ascii'}).split(/\r?\n/); // support unix and windows line endings

var pos = {x:0,y:0};
var slope = {x:3,y:1};

var count = 0;
var total = 1;

while(pos.y < dataset.length) {
	if(dataset[pos.y][pos.x]=="#") count++;
	pos.x = (pos.x + slope.x) % dataset[0].length;
	pos.y += slope.y;
}
console.log(count);
total *= count;

count = 0;
pos = {x:0,y:0}
slope = {x:1,y:1};
while(pos.y < dataset.length) {
	if(dataset[pos.y][pos.x]=="#") count++;
	pos.x = (pos.x + slope.x) % dataset[0].length;
	pos.y += slope.y;
}
console.log(count);
total *= count;

count = 0;
pos = {x:0,y:0}
slope = {x:5,y:1};
while(pos.y < dataset.length) {
	if(dataset[pos.y][pos.x]=="#") count++;
	pos.x = (pos.x + slope.x) % dataset[0].length;
	pos.y += slope.y;
}
console.log(count);
total *= count;

count = 0;
pos = {x:0,y:0}
slope = {x:7,y:1};
while(pos.y < dataset.length) {
	if(dataset[pos.y][pos.x]=="#") count++;
	pos.x = (pos.x + slope.x) % dataset[0].length;
	pos.y += slope.y;
}
console.log(count);
total *= count;


count = 0;
pos = {x:0,y:0}
slope = {x:1,y:2};
while(pos.y < dataset.length) {
	if(dataset[pos.y][pos.x]=="#") count++;
	pos.x = (pos.x + slope.x) % dataset[0].length;
	pos.y += slope.y;
}
console.log(count);
total *= count;

console.log(total)