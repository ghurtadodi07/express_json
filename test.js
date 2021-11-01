var cities = ['Tokyo', 'London', 'Boston', 'Berlin', 'Chicago', 'New York'];

cities.forEach(function callback(city) {
    console.log(city);
});

const myModule = (() => {
    const privateFoo = () => {}
    const privateBar = []
    const exported = {
      publicFoo: () => {},
      publicBar: () => {}
    }
    return exported
  })() // once the parenthesis here are parsed, the function
       // will be invoked
  console.log(myModule)
  console.log(myModule.privateFoo, myModule.privateBar)