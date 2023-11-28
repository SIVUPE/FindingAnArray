// Write a JavaScript function to find the unique elements from two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"

// let data1 = [1, 2, 3] 
// let data2 = [100, 2, 1, 10]
//  function difference(data1,data2){
//     data1: 1, 2, 3
//     data2: 100, 2, 1, 10
//  }
// console.log(difference([1, 2, 3], [100, 2, 1, 10]))


function difference(arr1, arr2){
    // make sure the arrays dont have sub arrays
    let un = [...new Set([...arr1, ...arr2])]
    let array1 = []
    let array2 = []
    let sector = false
    un.forEach( (x, i) => {
        if( x instanceof Array ){
            array2 = [...array2, ...x]
            sector = true
        } else {
            array1.push(x)
        }
        if(sector){
            un = difference( array1, array2 )
        }
    })
    un.sort( (a, b) => a - b );
    un.forEach( (x, i) => un[i] = x.toString() );
    return un
}

