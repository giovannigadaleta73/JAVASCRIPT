let ob1 = Object.create({name: "Mario"})

Reflect.defineProperty(ob1, 'nome', {value: 'Giovanni'})
console.log(Reflect.get(ob1,'nome'))