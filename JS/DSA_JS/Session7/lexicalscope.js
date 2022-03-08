function parent() {
  const message = "\n👨 I am from parent";
  function child1() {
    console.log(message, "👧 Called from child 1️⃣");
  }

  function child2() {
    const message = "Child Message";
    console.log(message, "Called from child 2️⃣\n");
  }

  child1();
  child2();
}

parent();
