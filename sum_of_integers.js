// Given an array of integers, return the indices of
// of the two numbers that add up to a given target

const find_sum = (nums, target) => {
    for(let p1 = 0; p1< nums.length; p1++){
        const num_to_find = target - nums[p1];
        for(let p2 = p1+1; p2 < nums.length; p2++ ){
            if(nums[p2] === num_to_find){
                 console.log([p1, p2]);
            }
        }
    }
    return null;
}

find_sum([1, 4, 5, 7, 3, 2, 9],11);