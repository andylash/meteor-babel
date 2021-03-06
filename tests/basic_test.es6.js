Tinytest.add('truth', function (test) {
  test.equal(true, true);
});

Tinytest.add('Classes', function (test) {
  class Person {
    constructor(name) {
      this.name = name;
    }

    getName () {
      return this.name;
    }
  }
  var pippo = new Person('grigio');
  
  test.equal(pippo.name , 'grigio');
});

Tinytest.add('Template strings', function (test) {
  var name = 'Luigi', surname = 'Maselli';

  test.equal( `Hi, ${name} ${surname}`, 'Hi, Luigi Maselli');
});



Tinytest.add('Destructuring', function (test) {
  let [head, , tail] = [1,2,3];

  test.equal( head, 1);
  test.equal( tail, 3);
});


Tinytest.add('Generators functions', function (test) {
  function* foo() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
      return 6;
  }

  var out = [];
  for (var v of foo()) {
      out.push(v)
  }

  test.equal( out, [1,2,3,4,5]);
});

Tinytest.add('Sets', function (test) {
  var s = new Set();
  s.add("hello").add("goodbye").add("hello");

  test.equal( s.size, 2);
  test.equal( s.has("hello"), true);
});

// Currently broken see: https://github.com/grigio/meteor-babel/issues/5
Tinytest.add('Meteor - check Number (workaround)', function (test) {
  // test.equal( check(666, Number ), true );
  test.equal( check(666, new Number(666).valueOf()), undefined );
});

// blacklist: ["useStrict"]
Tinytest.add('Meteor - global vars', function (test) {
  (function () {
    myVar = 'yes';
  })();
  test.equal( myVar , 'yes');
});


