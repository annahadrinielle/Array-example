var array1 = [ 1, 2, 3, 4, 5 ];

/*
array1[0] = 1
array1[1] = 2
array1[2] = 3
array1[3] = 4
array1[4] = 5
0, 1, 2, 3, 4 are indexes
*/

array1.push(11);

console.log(array1);

for(var a in array1){
  console.log("a = " + a);
}

var array2 = [ "name", 12, true];
/* 
array2[0] = "name"
array2[1] = 12
array2[2] = true
*/

//console.log(array2);

var array3 = [[1,2], [2,3],[3,4]];
/*
array3[0] = [1,2];

array3[0][0] = 1 
sub index [0] for array3[0]

array3[0][1] = 2
sub index [1] for array3[0]


array3[1] = [2,3];
array3[1][0] = 2
array3[1][1] = 3

*/
//console.log(array3);


function setup() {
  createCanvas(800,400);  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}