import StrawberryCakeFactory from './factories/StrawberryCakeFactory'
import GingerCakeFactory from './factories/GingerCakeFactory'
import print from '../print'

export default function () {

  const TIME_FACTOR = 500

  function asyncBake(cakes, factory, cb) {
    var size = Math.floor(2 + Math.random() * 4)
    var name = 'ProtoCake N' + Math.floor(Math.random() * 1000) + 'S' + size
    print('At [' + performance.now().toFixed(2) + ']: ', '#f88')
    print('Start baking ' + name + ' with size ' + size + '\n')
    setTimeout(function () {
      cakes.push(factory.createRandomCake(name, size))
      print('End baking ' + name + '\n', '#f88')
      cb()
    }, size * TIME_FACTOR)
  }


  var sfactory = new StrawberryCakeFactory()
  var gfactory = new GingerCakeFactory()

  var cakes = []

  print('Start baking some proto-cakes\n\n', '#f44')

  asyncBake(cakes, sfactory, function () {
    asyncBake(cakes, gfactory, function () {
      asyncBake(cakes, sfactory, function () {
        asyncBake(cakes, gfactory, function () {
          print('Stop baking cakes \n\n', '#f44')
          print(JSON.stringify(cakes, '', 2) + '\n', '#f44')
          console.log(cakes)
        })
      })
    })
  })

}