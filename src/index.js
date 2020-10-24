
// You should implement your task here.

 module.exports = function towelSort (matrix) {


    a=1;
    b=2;
    c=a+b;

     if ( matrix === undefined) {
         return [];
     }

      let myres = [];

    for (let i = 0; i < matrix.length; i++) {

        (i % 2 === 0) ? myres = myres.concat(matrix[i]): myres = myres.concat(matrix[i].reverse());
    }

    return myres
}
