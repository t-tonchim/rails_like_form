export default function beforeCall(functions, callback){
  const handler = {
    apply: (target, thisArg, argumentList) => {
      try {
        Reflect.apply(callback, thisArg, argumentList)
      } catch(_e) {
        return
      }
      return Reflect.apply(target, thisArg, argumentList)
    }
  }
  functions.forEach(f => {
    this[f.name] = new Proxy(f, handler)
  })
}

