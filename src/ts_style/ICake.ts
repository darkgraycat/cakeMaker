import ILayer from "./ILayer";

export default interface ICake {
  getName(): string
  getRecipe(): string
  addLayer(layer: ILayer): void
  removeLayer(): ILayer
}