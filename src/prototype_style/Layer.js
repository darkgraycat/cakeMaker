export default function Layer() {
  this._flavor = 'empty'
  this._isFilled = false
}

Layer.prototype.getFlavor = function () {
  return this._flavor
}

Layer.prototype.isFilled = function () {
  return this._isFilled
}

Layer.prototype.fill = function (flavor) {
  if (!this._isFilled) {
    this._flavor = flavor
    this._isFilled = true
  }
}