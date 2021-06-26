
function setup() {
  createCanvas(800,400); 

  emptyarray = [];
  
  array1 = [ 10, 20, 30, 40, 50 ];

  /*

  1,2,3,4,5 are elements of array1
  0, 1, 2, 3, 4 are indexes of the elements

  array1[0] = 1
  array1[1] = 2
  array1[2] = 3
  array1[3] = 4
  array1[4] = 5

  */
  

  //array1.push(11);
  //console.log('11 pushed into array1');

  //array1.splice(0,3);
  //console.log('array1 spliced');

  console.log(array1);

  console.log('length of array: ' + array1.length)


  
  

  /*
  for(var a in array1){
    console.log("a = " + a);
  }
  */
  
  array2 = [ "name", 12, true];
  /* 
  array2[0] = "name"
  array2[1] = 12
  array2[2] = true
  */

  //console.log(array2);

  array3 = [ [1,2], [2,3], [3,4] ];
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
}

function draw() {
  background(255,255,255);  
  textSize(50);
  fill('dodgerblue')
  stroke('gray')
  textFont('Georgia')
  text('check the console',width/2, height/2)

}
