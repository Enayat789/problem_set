// Create a function that receives an array of numbers and returns an array containing only the positive numbers

// var all_Nums = [12, -123, -65, 23, 543, -453, 333];

function findPositivesOnly(all_Nums) {
  var positive_Nums = [];
  for (let i = 0; i < all_Nums.length; i++) {
    const num = all_Nums[i];

    if (num > 0) {
      //   console.log(num);
      positive_Nums.push(num);
    }
  }

  return positive_Nums;
}

const result = findPositivesOnly([12, -123, -65, 23, 543,111,-2222, -453, 333]);
console.log(result);
