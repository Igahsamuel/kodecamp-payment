$(":input").inputmask();
const progress = document.getElementById("progress")
const confirm = document.getElementById("confirm")
const circles = document.querySelectorAll('.circle')
const firms = document.querySelectorAll('.firm')

let currentActive = 1;

confirm.addEventListener('click', () => {
  currentActive ++;

  
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if(idx < currentActive){
      circle.classList.add('active')
    }else{
      circle.classList.remove('active')
    }
  })
  firms.forEach((firm, idx) => {
    if(idx < currentActive){
      firm.classList.add('active')
    }
    else{
      firm.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width = (actives.length  / circles.length) * 25 + '%'
}
