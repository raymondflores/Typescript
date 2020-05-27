import 'reflect-metadata';

// const plane = {
//   color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);
// Reflect.defineMetadata('note1', 'hiii', plane, 'color');

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);
// const note1 = Reflect.getMetadata('note1', plane, 'color');

// console.log(note, height, note1);

@controller
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log(path);
  }
}
