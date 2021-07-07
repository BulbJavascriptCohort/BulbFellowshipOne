// console.log(2)


// console.log( console )

// public, private, protected

// house ===> kitchen ( private ), cook (protected) parlour (public) ===> guest,

// public ===> everybody can see it. 
// private ===> only attribute can see/utilise it 
// protected ===> 

const _jaafar = "Adegoke"

const lola = "Lawal"

function _segun(){
	return "Abiodun"
}

const addition = (a,b) => {
	console.log("In something")
	return a + b
}

const jaafar = () => {
	return _jaafar	
}

const solomon = (adjective) => {
	return `Solomon is a ${adjective} boy` 
}

// export default solomon

// exports.module = {
// 	l: lola,
// 	s: solomon,
// 	p: protectJaafar
// }

// module.exports = {
// 	l: lola,
// 	s: solomon,
// 	p: jaafar
// }

// destructing

module.exports =  {
	lola,
	solomon,
	jaafar, 
	addition
}

// console.log( exports )
