export default class Layer {

  constructor() {
    this._flavor = 'empty'
    this._isFilled = false
  }

  get flavor() {
    return this._flavor
  }

  get isFilled() {
    return this._isFilled
  }

  fill(flavor) {
    if (this._isFilled) return
    this._flavor = flavor
    this._isFilled = true
  }

}



