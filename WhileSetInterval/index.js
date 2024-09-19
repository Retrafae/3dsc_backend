//let n = 0;
// while (n <= 5){
//   console.log(n);
//   n++;
// }


let fps = 0
// setInterval(function(){
// fps = Math.round(Math.random(30,60)*60)
//   console.clear()
//   console.log(`FPS: ${fps}`)
// },500)

setInterval(function(){
  const relogio = new Date().toLocaleTimeString();
  console.clear
  console.log(relogio)
  
},1000)