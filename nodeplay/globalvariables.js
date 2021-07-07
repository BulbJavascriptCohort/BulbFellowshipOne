const { solomon, lola } = require(__dirname + "/somethings.js")  // destructing
// const ss = require("./somethings.js")
// const a = require("axios") // third party
console.log( solomon )
console.log( lola )
console.log( jaafar )

// console.log( ` My name is ${ss.module.l}`)
// console.log( ss.module.s("cute") )
// console.log( ss.module.p() )

/**
 * 	__dirname
 * 	__filename	
 * 	require
 * 	module
 *  process
 */

 // global nodejs variable ===> nodejs

 let x = 2  // // global scope

 function rabo(){
   let x = 3 // local scope
 }
 
 rabo()

 // console.log(x)


//segun ==> 2, 2
//iyin ==> 2, 2
// matthew ==> 3, 3 
// rabo ===> 2, 2 
// jaafar ===> 2, 2
// tunde ===> 3, 2  
// lola ===> 2, 2
// joshua ===> 3, 2
// eben ===> 2, 2
// fatimah ==> 2, 2
// solomon ==> 3, 2


// console.log(__dirname + "/photographer") //  return the directory/folder you are in
// console.log(__filename) // __dirname + filename 

// wedding --  600
// football -- 800
// birthday -- 300
// 1700
// 400px * 400px

function addition(a,b){
	return parseInt(a) + parseInt(b)
}

// console.log( addition(process.argv[2], process.argv[3]) )




  
