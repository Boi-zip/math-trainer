const ans = document.getElementById('ans')
const que = document.getElementById('que')
const btn = document.getElementById('Btn')

let arrQue = JSON.parse(localStorage.getItem("arrQue"))
let used = []
let randQue = arrQue[Math.floor(Math.random() * arrQue.length)];
que.innerHTML = randQue

function game() {
  if(que.innerHTML != "done" && ans.value == eval(que.innerHTML)){
    que.style = "color: limegreen;"
    ans.disabled = true

    setTimeout(function () {
      ans.disabled = false
      que.style = "color: black;"
      ans.value = ""

    used.push(randQue)

    let found = used.some((item) => randQue.includes(item))

      function Check() {
        if (found == true && arrQue.length != used.length) {

          randQue = arrQue[Math.floor(Math.random() * arrQue.length)]
          found = used.some((item) => randQue.includes(item))
          que.innerHTML = randQue

          Check()
        }else if((arrQue.length == used.length) == true){que.innerHTML = "done"}
      }
      Check()
  }, 750)
}else if(que.innerHTML != "done" && ans.value != eval(que.innerHTML)){
  que.style = "color: Crimson;"
  ans.disabled = true
  setTimeout(function () {
    ans.disabled = false
    que.style = "color: black;"
    ans.value = ""
  }, 750)
 }
}

btn.addEventListener('click', () => {
  game()
});

ans.addEventListener("keyup", function(event) {
  // check if the "Enter" key is pressed
  if (event.key === 'Enter') {
      // call your function here
      game();
  }
});