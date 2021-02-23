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

document.getElementById('nine').value = localStorage.getItem('appt')

document.addEventListener('click', event => {
  if (event.target.classList.contains('col-1 btn btn-infor border')){
    let appt = localStorage.setItem('appt', document.getElementById('nine').value)
    }
})

document.getElementById('ten').value = localStorage.getItem('appt')

document.addEventListener('click', event => {
  if (event.target.classList.contains('col-1 btn btn-infor border')) {
    let appt = localStorage.setItem('appt', document.getElementById('ten').value)
  }
})
document.getElementById('eleven').value = localStorage.getItem('appt')

document.addEventListener('click', event => {
  if (event.target.classList.contains('col-1 btn btn-infor border')) {
    let appt = localStorage.setItem('appt', document.getElementById('eleven').value)
  }
})
document.getElementById('twelve').value = localStorage.getItem('appt')

document.addEventListener('click', event => {
  if (event.target.classList.contains('col-1 btn btn-infor border')) {
    let appt = localStorage.setItem('appt', document.getElementById('twelve').value)
  }
})
document.getElementById('one').value = localStorage.getItem('appt')

document.addEventListener('click', event => {
  if (event.target.classList.contains('col-1 btn btn-infor border')) {
    let appt = localStorage.setItem('appt', document.getElementById('one').value)
  }
})
document.getElementById('two').value = localStorage.getItem('appt')

document.addEventListener('click', event => {
  if (event.target.classList.contains('col-1 btn btn-infor border')) {
    let appt = localStorage.setItem('appt', document.getElementById('two').value)
  }
})
document.getElementById('three').value = localStorage.getItem('appt')

document.addEventListener('click', event => {
  if (event.target.classList.contains('col-1 btn btn-infor border')) {
    let appt = localStorage.setItem('appt', document.getElementById('three').value)
  }
})
document.getElementById('four').value = localStorage.getItem('appt')

document.addEventListener('click', event => {
  if (event.target.classList.contains('col-1 btn btn-infor border')) {
    let appt = localStorage.setItem('appt', document.getElementById('four').value)
  }
})
document.getElementById('five').value = localStorage.getItem('appt')

document.addEventListener('click', event => {
  if (event.target.classList.contains('col-1 btn btn-infor border')) {
    let appt = localStorage.setItem('appt', document.getElementById('five').value)
  }
})