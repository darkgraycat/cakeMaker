import print from '../print'
import Cake from './Cake'
import AbstractCakeFactory from './factories/AbstractCakeFactory'
import GingerCakeFactory from './factories/GingerCakeFactory'
import ICakeFactory from './factories/ICakeFactory'
import StrawberryCakeFactory from './factories/StrawberryCakeFactory'

export default (): void => {

  const TIME_FACTOR: number = 500
  const MAX_CAKES: number = 3

  const asyncBake = (cakes: Cake[], factory: ICakeFactory): Promise<void> => {
    const size: number = ~~(2 + Math.random() * 4)
    const name: string = `TsCake N${~~(Math.random() * 1000)}S${size}`

    print(`At[${performance.now().toFixed(2)}]: `, '#88f')
    print(`Start baking ${name} with size ${size}\n`)

    return new Promise((resolve, reject) => {
      if (cakes.length >= MAX_CAKES)
        return reject(new Error('Maximum number of cakes exceed!'))
      setTimeout(() => {
        cakes.push(factory.createRandomCake(name, size))
        print(`End baking ${name}\n`, '#88f')
        resolve()
      }, size * TIME_FACTOR)
    })
  }

  const sfactory = new StrawberryCakeFactory()
  const gfactory = new GingerCakeFactory()

  const cakes: Cake[] = []

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