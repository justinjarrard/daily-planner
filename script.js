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

