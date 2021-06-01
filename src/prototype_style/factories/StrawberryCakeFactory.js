import AbstractCakeFactory from './AbstractCakeFactory'

export default function StrawberryCakeFactory() {
  AbstractCakeFactory.call(this)
  this._flavors = ['eggs', 'milk', 'chocolate', 'strawberry', 'sugar']
}
StrawberryCakeFactory.prototype = Object.create(AbstractCakeFactory.prototype)
StrawberryCakeFactory.prototype.constructor = StrawberryCakeFactory
