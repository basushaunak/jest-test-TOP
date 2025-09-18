// analyzeArray Tests
const analyzeArray = require("./analyzeArray");

test("analyzeArray(10) will return {min: undefined, max: undefined, length: undefined, average: undefined}",()=>{
    expect(analyzeArray(10)).toEqual({min: undefined, max: undefined, length: undefined, average: undefined});
})

test("analyzeArray('10') will return {min: undefined, max: undefined, length: undefined, average: undefined}",()=>{
    expect(analyzeArray("10")).toEqual({min: undefined, max: undefined, length: undefined, average: undefined});
})

test("analyzeArray([10]) will return {min: undefined, max: undefined, length: undefined, average: undefined}",()=>{
    expect(analyzeArray([10])).toEqual({min: 10, max: 10, length: 1, average: 10});
})

test("analyzeArray(['10']) will return {min: undefined, max: undefined, length: undefined, average: undefined}",()=>{
    expect(analyzeArray(["10"])).toEqual({min: undefined, max: undefined, length: 1, average: undefined});
})

test("analyzeArray([1,2,3,4,5]) will return {min: 1, max: 5, length: 5, average: 3}",()=>{
    expect(analyzeArray([1,2,3,4,5])).toEqual({min: 1, max: 5, length: 5, average: 3});
})

test("analyzeArray([1,2,3,'4',5]) will return {min: undefined, max: undefined, length: 5, average: undefined}",()=>{
    expect(analyzeArray([1,2,3,'4',5])).toEqual({min: undefined, max: undefined, length: 5, average: undefined});
})

