"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const nums = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = lodash_1.default.uniq(nums);
console.log(uniqueNums); // Output: [1, 2, 3, 4, 5]
