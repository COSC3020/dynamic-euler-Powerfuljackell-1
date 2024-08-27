//Utilized prior experience in class, including my own prior exercises
function e(n) {
    var final = 1;
    var factTemp = 1;
    for(let i = 1; i <=n; i++){
        final += 1/(factTemp*=i);
    }
   return final;
}
//console.log((e(1000)))