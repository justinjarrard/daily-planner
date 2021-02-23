// puts time and day across the top
document.getElementById('currentDay').textContent = moment().format('dddd, MMMM, Do YYYY')

let currentHour = new Date()
let hours = currentHour.getHours()

console.log(currentHour)
console.log(hours)

for (let i = 0; i < 24; i++)

  if (hours > 9) {
    document.getElementById('nine').classList.add('past')
  } else if (hours < 9) {
    document.getElementById('nine').classList.add('future')
  } else if (hours === 9) {
    document.getElementById('nine').classList.add('present')
  }

if (hours > 10) {
  document.getElementById('ten').classList.add('past')
} else if (hours < 10) {
  document.getElementById('ten').classList.add('future')
} else if (hours === 10) {
  document.getElementById('ten').classList.add('present')
}
if (hours > 11) {
  document.getElementById('eleven').classList.add('past')
} else if (hours < 11) {
  document.getElementById('eleven').classList.add('future')
} else if (hours === 11) {
  document.getElementById('eleven').classList.add('present')
}

if (hours > 12) {
  document.getElementById('twelve').classList.add('past')
} else if (hours < 12) {
  document.getElementById('twelve').classList.add('future')
} else if (hours === 12) {
  document.getElementById('twelve').classList.add('present')

  if (hours > 13) {
    document.getElementById('one').classList.add('past')
  } else if (hours < 13) {
    document.getElementById('one').classList.add('future')
  } else if (hours === 13) {
    document.getElementById('one').classList.add('present')
  }

  if (hours > 14) {
    document.getElementById('two').classList.add('past')
  } else if (hours < 14) {
    document.getElementById('two').classList.add('future')
  } else if (hours === 14) {
    document.getElementById('two').classList.add('present')
  }

  if (hours > 15) {
    document.getElementById('three').classList.add('past')
  } else if (hours < 15) {
    document.getElementById('three').classList.add('future')
  } else if (hours === 15) {
    document.getElementById('three').classList.add('present')
  }

  if (hours > 16) {
    document.getElementById('four').classList.add('past')
  } else if (hours < 16) {
    document.getElementById('four').classList.add('future')
  } else if (hours === 16) {
    document.getElementById('four').classList.add('present')
  }

  if (hours > 17) {
    document.getElementById('five').classList.add('past')
  } else if (hours < 17) {
    document.getElementById('five').classList.add('future')
  } else if (hours === 17) {
    document.getElementById('five').classList.add('present')
  }
}

document.getElementById('nine').value = localStorage.getItem('appt1')

document.addEventListener('click', event => {
  if (event.target.id.includes('btn1')){
    let appt = localStorage.setItem('appt1', document.getElementById('nine').value)
    }
})

document.getElementById('ten').value = localStorage.getItem('appt2')

document.addEventListener('click', event => {
  if (event.target.id.includes('btn2')) {
    let appt = localStorage.setItem('appt2', document.getElementById('ten').value)
  }
})

document.getElementById('eleven').value = localStorage.getItem('appt3')

document.addEventListener('click', event => {
  if (event.target.id.includes('btn3')) {
    let appt = localStorage.setItem('appt3', document.getElementById('eleven').value)
  }
})
document.getElementById('twelve').value = localStorage.getItem('appt4')

document.addEventListener('click', event => {
  if (event.target.id.includes('btn4')) {
    let appt = localStorage.setItem('appt4', document.getElementById('twelve').value)
  }
})

document.getElementById('one').value = localStorage.getItem('appt5')

document.addEventListener('click', event => {
  if (event.target.id.includes('btn5')) {
    let appt = localStorage.setItem('appt5', document.getElementById('one').value)
  }
})
document.getElementById('two').value = localStorage.getItem('appt6')

document.addEventListener('click', event => {
  if (event.target.id.includes('btn6')) {
    let appt = localStorage.setItem('appt6', document.getElementById('two').value)
  }
})

document.getElementById('three').value = localStorage.getItem('appt7')

document.addEventListener('click', event => {
  if (event.target.id.includes('btn7')) {
    let appt = localStorage.setItem('appt7', document.getElementById('three').value)
  }
})

document.getElementById('four').value = localStorage.getItem('appt8')

document.addEventListener('click', event => {
  if (event.target.id.includes('btn8')) {
    let appt = localStorage.setItem('appt8', document.getElementById('four').value)
  }
})

document.getElementById('five').value = localStorage.getItem('appt9')

document.addEventListener('click', event => {
  if (event.target.id.includes('btn9')) {
    let appt = localStorage.setItem('appt9', document.getElementById('five').value)
  }
})