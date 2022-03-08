function modularExponentiation(x , p) {
    let powNum = BigInt(0);
    powNum = Math.pow(x,p);
    //let modulo = BigInt(powNum%(1e9 + 7));
    let modulo = powNum%(1e9 + 7);
    return modulo.toString();
}

