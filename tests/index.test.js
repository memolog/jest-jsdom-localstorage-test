const Foo = require('../src/index');

console.log(Object.getOwnPropertyDescriptor(global, 'localStorage'));
console.log(Object.getOwnPropertyDescriptor(global, '_localStorage'));

describe ('Foo', () => {
  test('foo', () => {
    const foo = new Foo('foo');
    foo.set('test');
    expect(foo.get()).toEqual('test');
  });
});

describe('Error', () => {
  const localStorageOrig = global.localStorage;

  const localStorageMock = {
    setItem: jest.fn(()=>{
      throw new Error('Test');
    }),
    getItem: (key) => {
      return localStorageOrig.getItem(key);
    }
  };

  test('just assign global property', () => {
    global.localStorage = localStorageMock;

    const foo = new Foo('qux');
    foo.set('test');
    expect(foo.get()).toEqual(null);
  });

  test('define property to localStroge', () => {
    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock
    });

    const foo = new Foo('bar');
    foo.set('test');
    expect(foo.get()).toEqual(null);
  });

  test('define property to _localStroge', () => {
    Object.defineProperty(global, '_localStorage', {
      value: localStorageMock
    });

    const foo = new Foo('baz');
    foo.set('test');
    expect(foo.get()).toEqual(null);
  });
})
