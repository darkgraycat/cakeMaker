let printer = null
window.onload = function () {
  printer = document.getElementById('printer')
}

const CLEAR = 'CLS'
const NEWLINE = 'NL'

/**
 * 
 * @param {String} message Message to print
 * @param {String} color Color in CSS format
 */

export default function print(message, color = '#ddd') {
  if (!printer) {
    setTimeout(function () {
      print(message, color)
    }, 50) //lol
    return
  }
  if (message === CLEAR) {
    printer.innerHTML = ''
  } else if (message === NEWLINE) {
    printer.innerHTML += '\n'
  } else {
    console.info('printer at [', performance.now().toFixed(2), '] says:\n', message)
    printer.innerHTML += `<span style="color:${color}">${message}</span>` // almost React lol
  }
}

