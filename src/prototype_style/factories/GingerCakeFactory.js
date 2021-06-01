import AbstractCakeFactory from './AbstractCakeFactory'

export default function GingerCakeFactory() {
  AbstractCakeFactory.call(this)
  this._flavors = ['eggs', 'milk', 'lemon', 'ginger', 'sugar']
}
GingerCakeFactory.prototype = Object.create(AbstractCakeFactory.prototype)
GingerCakeFactory.prototype.constructor = GingerCakeFactory

