const input = document.getElementById('in')
const inp_mt1 = document.getElementById('inp-multiply1')
const inp_mt2 = document.getElementById('inp-multiply2')
const btn = document.getElementById('Btn')
const btn_mt = document.getElementById('Btn_mt')
const mathslc = document.getElementById("math")

let arrQue
if (JSON.parse(localStorage.getItem("arrQue"))) {
  arrQue = JSON.parse(localStorage.getItem("arrQue"))
} else {
  arrQue = []
}
let num = 0

arrQue.forEach((que, i) => {
  let child = document.getElementById('p1')
  let d1 = document.getElementById('d1')
  var li = document.createElement("li");
  li.innerHTML = arrQue[i];
  let numm = i + 1
  li.id = "li" + numm
  li.setAttribute("onclick","remove(this.id)");
  d1.insertBefore(li, child);
});

function add1Que() {
  arrQue.push(input.value)
  function create() {
  let child = document.getElementById('p1')
  let d1 = document.getElementById('d1')
  var li = document.createElement("li");
  num++
  li.innerHTML = input.value;
  li.id = "li" + num
  li.setAttribute("onclick","remove(this.id)");
  d1.insertBefore(li, child);
}
create()
input.value = ""
localStorage.setItem("arrQue", JSON.stringify(arrQue))
}

btn.addEventListener('click', () => {
  add1Que()
});

input.addEventListener("keyup", function(event) {
  // check if the "Enter" key is pressed
  if (event.key === 'Enter') {
      // call your function here
      add1Que();
  }
});

function remove(s) {
  for(var i = 0; i < arrQue.length; i++){

    if (arrQue[i] === document.getElementById(s).innerHTML) {
      arrQue.splice(i, 1);
    }}
  document.getElementById(s).parentNode.removeChild(document.getElementById(s))
localStorage.setItem("arrQue", JSON.stringify(arrQue))
}

function remAll() {
  let divElement = document.getElementById('d1')

  var liElements = divElement.getElementsByTagName("li");

for (var i = liElements.length - 1; i >= 0; i--) {
    liElements[i].parentNode.removeChild(liElements[i]);
}

  arrQue = []
localStorage.setItem("arrQue", JSON.stringify(arrQue))
}

btn_mt.addEventListener('click', function () {
  let times = eval(inp_mt2.value) + 1
  function create(que) {
    let child = document.getElementById('p1')
    let d1 = document.getElementById('d1')
    var li = document.createElement("li");
    num++
    li.innerHTML = que;
    li.id = "li" + num
    li.setAttribute("onclick","remove(this.id)");
    d1.insertBefore(li, child);
  }
  for (let i = 1; i < times; i++) {
    const ques = `${inp_mt1.value} ${mathslc.options[mathslc.selectedIndex].text} ${i}`
    arrQue.push(ques)
    create(ques)
  }
localStorage.setItem("arrQue", JSON.stringify(arrQue))
});
