export default class Layer {

  constructor() {
    this._flavor = 'empty'
    this._isFilled = false
  }

  getFlavor() {
    return this._flavor
  }

  isFilled() {
    return this._isFilled
  }

  fill(flavor) {
    if (!this._isFilled) {
      this._flavor = flavor
      this._isFilled = true
    }
  }

}



