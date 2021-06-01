var printer = null
window.onload = function () {
  printer = document.getElementById('printer')
}

const CLEAR = 'CLS'
const NEWLINE = 'NL'

export default function print(msg, clr = '#ddd') {
  if (!printer) {
    setTimeout(function () {
      print(msg, clr)
    }, 50) //lol
    return
  }
  if (msg === CLEAR) {
    printer.innerHTML = ''
  } else if (msg === NEWLINE) {
    printer.innerHTML += '\n'
  } else {
    console.info('printer at [', performance.now().toFixed(2), '] says:\n', msg)
    printer.innerHTML += '<span ' + 'style="color:' + clr + '"' + '>' + msg + '</span>'
  }
}

