// RegExp... Advenced, Expert....











let accounts = [[1,2,3],[3,5,1],[9,6,2]]

// let max=0;
// for(let i of accounts ){
//     // console.log(i);
// let p=  i.reduce((sum,arr)=>sum+arr,0)
// // console.log(p);
//       if(p>max){
//           max=p;
         
//       }
    
// }
//   console.log(max);
let max = 0
for(let i =0; i<accounts.length; i++){
    console.log(accounts[i]);
    let b = accounts[i].reduce((sum, item) => sum + item,0)
    if(b>max){
        max=b
    }
}

console.log(max);
// let b = arr.reduce((sum, [item], index, [arry]) =>arry[index] += sum  ,0 )
// console.log(b)

// let a = arr.sort(([a,b]) => [b] - [a] )
// console.log(a);









    // const n = nums.length;
    // const Tsum = (n * (n + 1)) / 2;
    // const actualSum = nums.reduce((acc, num) => acc + num, 0);
    // return Tsum - actualSum;


// let nums = [1,2,3,4]

// let a = nums.map((item,index) => item += index)

// console.log(a);






























// // let arr = [1,2,3,4,5,6,7,"jasfhasj", 's']
// let arr = "44salzomjahsk27358263"
// let n = "z"
// let regEx = /.+/;

// // let a = regEx.test(arr)
// let a = arr.match(regEx)

// // let a  = arr.map((item) => item !== regEx)

// console.log(a);

// Array.prototype.remove = function(n){
//     let res = this.filter((item) => item !== n)
//     console.log(res);
// }

// arr.remove(4)


