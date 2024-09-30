// codewars link: https://www.codewars.com/kata/526571aae218b8ee490006f4/javascript , cuenta: bfl.is.already.taken
var countBits = function(n) {
    return Array.from(n.toString(2)).filter(n => n == 1).length //es entendible segun yo
};