function incrementNumber(N, A) {
  let i = N - 1;
  let carry = 1;
  while (i >= 0) {
    A[i] = A[i] + carry;
    carry = Math.floor(A[i] / 10);
    A[i] = A[i] % 10;
    i--;
  }

  // while(carry!=0){
  //     A.unshift(carry%10);
  //     carry = Math.floor(carry/10);
  // }  thiis while also works, but we should it for carry > 1.

  if (carry != 0) {
    A.unshift(carry);
  }

  return A
}

