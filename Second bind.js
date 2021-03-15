function f() {
    console.log(this.name);
  }
  
  f = f.bind( {name: "John"} ).bind( {name: "Ann" } );
  
  f();
  /*
  The exotic bound function object returned by f.bind(...) remembers the context (and arguments if provided) only at creation time.

A function cannot be re-bound.*/