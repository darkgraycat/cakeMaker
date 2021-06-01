import AbstractCakeFactory from './AbstractCakeFactory'

export default class GingerCakeFactory extends AbstractCakeFactory {

  constructor() {
    super()
    this._flavors = ['eggs', 'milk', 'lemon', 'ginger', 'sugar']
  }

}

