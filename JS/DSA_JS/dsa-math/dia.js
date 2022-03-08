function diamond(n) {
  let space = n - 1;
  let str = "";
  for (let i = 0; i < n; i++) {
     for (let j = 0; j < space; j++)
       str += " ";
    for (let j = 0; j <= i; j++)
      str += "* ";
      str += "\n";
      space--;
  }
  space = 1;
  for (let i = n - 1; i > 0; i--) {
     for (let j = 0; j < space; j++)
       str += " ";
    for (let j = 0; j < i; j++)
      str += "* ";
    str += "\n";
     space++;
  }
  console.log(str);
}

diamond(5)