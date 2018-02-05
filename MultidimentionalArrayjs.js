
function multiDimSum(arr){
    var len = arr.length;
    var sum = 0;
    arr.forEach(function(item1){
        if(typeof item1 === "object"){
            item1.forEach(function(item2){
                if(typeof item2 === "object"){
                    item2.forEach(function(item3){
                        if(typeof item3 === "object"){
                            item3.forEach(function(item4){
                                sum += item4;
                            })
                        }else{
                            sum += item3;
                        }                        
                    })
                }else{
                    sum += item2;
                }
            });
        }else{
            sum += item1;
        }
    })
    console.log(typeof sum);
    return sum
}

console.log(multiDimSum([1, 2, 3, 4, 5, 6])); //return 21
console.log(multiDimSum([1, [2, [3, 4]], [5, 6]])); //should return 21 
console.log(multiDimSum([10, [2, [[3], [10, 4]]], [5, 6]])); //should return 40