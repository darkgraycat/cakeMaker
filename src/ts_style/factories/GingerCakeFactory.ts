import Cake from "../Cake";
import AbstractCakeFactory from "./AbstractCakeFactory";

export default class GingerCakeFactory<T> extends AbstractCakeFactory {
  constructor() {
    super()
    this.flavors = ['eggs', 'milk', 'lemon', 'ginger', 'sugar']
  }
}