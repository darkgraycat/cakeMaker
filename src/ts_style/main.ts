import print from '../print'
import ICake from './interfaces/ICake'
import GingerCakeFactory from './factories/GingerCakeFactory'
import ICakeFactory from './interfaces/ICakeFactory'
import StrawberryCakeFactory from './factories/StrawberryCakeFactory'

export default (): void => {

  const TIME_FACTOR: number = 500
  const MAX_CAKES: number = 3

  const asyncBake = (cakes: ICake[], factory: ICakeFactory): Promise<void> => {
    const size: number = ~~(2 + Math.random() * 4)
    const name: string = `TsCake N${~~(Math.random() * 1000)}S${size}`

    print(`At[${performance.now().toFixed(2)}]: `, '#88f')
    print(`Start baking ${name} with size ${size}\n`)

    return new Promise<void>((resolve, reject) => {
      if (cakes.length >= MAX_CAKES)
        return reject(new Error('Maximum number of cakes exceed!'))
      setTimeout(() => {
        cakes.push(factory.createRandomCake(name, size))
        print(`End baking ${name}\n`, '#88f')
        resolve()
      }, size * TIME_FACTOR)
    })
  }

  const cakes: Array<ICake> = new Array<ICake>()
  const sfactory: ICakeFactory = new StrawberryCakeFactory()
  const gfactory: ICakeFactory = new GingerCakeFactory()

  print(`Start baking some ts-cakes\n\n`, '#44f')

  asyncBake(cakes, sfactory)
    .then(() => asyncBake(cakes, gfactory))
    .then(() => asyncBake(cakes, sfactory))
    .then(() => asyncBake(cakes, gfactory))
    .catch(err => console.error(err))
    .then(() => {
      print(`Stop baking cakes\n\n`, '44f')
      print(JSON.stringify(cakes, null, 2) + '\n', '#44f')
      console.log(cakes)
    })

}