function getSecondLargest(nums) {
    var sortnums = nums.sort(function(a, b){ return a - b }); //sorting nums array 
   
    sortnums.forEach((item, index) =>{
        var x = sortnums.indexOf(item);
        if(x!=index)
        {
            sortnums.splice(index,1); // deleting all duplicate entries
        }
    });
    sortnums.splice(-1,1); //deleted largest number
    sortnums.splice(0,sortnums.length-1); //delete number remaining second last
    return nums = sortnums[0];

}
