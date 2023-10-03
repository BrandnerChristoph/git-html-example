let x = [];

for(i = 0; i < 10000000; i++){
	x[i] = i;
}

// algorithmus zum sortieren bereitstellen
const sort = () =>{
	console.log('sort');
	console.time('foreach-loop');
	x.forEach((elem) => {
		//
	});
	console.timeEnd('foreach-loop');

}


sort();