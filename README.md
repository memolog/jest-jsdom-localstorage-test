```
nvm use v8
npm test
```
```
 FAIL  tests/index.test.js
  Foo
    ✓ foo (13ms)
  Error
    ✕ just assign global property (18ms)
    ✕ define property to localStroge (3ms)
    ✓ define property to _localStroge (17ms)
```

```
nvm use v9
npm test
```
```
 FAIL  tests/index.test.js (7.568s)
  Foo
    ✓ foo (7ms)
  Error
    ✕ just assign global property (99ms)
    ✓ define property to localStroge (100ms)
    ✓ define property to _localStroge (2ms)
```
