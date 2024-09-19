let n = 0;

// setInterval(function(){
//   console.clear()
//   console.log(n)
//   n++
// }, 1000)
// clearInterval()


// setTimeout(function(){
//   console.log('Executou')
// },5000)

// const intervalo = setInterval(function(){
//   console.clear()
//   console.log(n)
//   n++
// },1000)


// setTimeout(function(){
//   clearInterval(intervalo)
//   location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
// }, 6000)

let wow_random = setInterval(function(){
  console.log(((Math.random() * 10) + 1).toFixed())
}, 3000)

setTimeout(function(){
  clearInterval(wow_random)

},8000)