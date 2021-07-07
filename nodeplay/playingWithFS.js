const fs = require("fs")
const content = "do not rage into the good night. sleep in your house"
// pending ===> sucess ( then ), rejected( catch )
fs.writeFile("./poems.txt", content, ( err ) => {
	if(err){
		console.warn( err )
	}	
})



// console.log( fs )