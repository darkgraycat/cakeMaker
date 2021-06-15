export default interface ILayer {
  getFlavor(): void
  isFilled(): boolean
  fill(flavor: string): void
}