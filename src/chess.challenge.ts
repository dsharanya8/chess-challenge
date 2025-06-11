import _ from 'lodash';

const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = _.uniq(nums);

console.log(uniqueNums); // Output: [1, 2, 3, 4, 5]
