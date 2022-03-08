function parentFunction() {
  //Lexical Scope of childFunction() START
  const message = "Hi! I'm a message from parent 👋";

  function childFunction() {
    console.log(message);
  }

  return childFunction;
  //Lexical Scope of childFunction() END
}

const ans = parentFunction();
ans();

