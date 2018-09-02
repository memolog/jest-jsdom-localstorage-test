function Foo(key) {
  this.key = key;
}

Foo.prototype.set = function(value){
  try {
    localStorage.setItem(this.key, value);
  } catch (error) {
    console.log(error);
  }
}

Foo.prototype.get = function(){
  return localStorage.getItem(this.key);
}

module.exports = Foo;
