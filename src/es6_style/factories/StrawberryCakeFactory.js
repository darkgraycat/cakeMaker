import AbstractCakeFactory from './AbstractCakeFactory'

export default class StrawberryCakeFactory extends AbstractCakeFactory {

  constructor() {
    super()
    this._flavors = ['eggs', 'milk', 'chocolate', 'strawberry', 'sugar']
  }

}

