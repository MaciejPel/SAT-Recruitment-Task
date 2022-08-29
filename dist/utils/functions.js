"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNaturalNumber = void 0;
// function for checking if number is natural (greater then 0)
const isNaturalNumber = (n) => Number.isInteger(Number(n)) && Number(n) >= 0;
exports.isNaturalNumber = isNaturalNumber;
