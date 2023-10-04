let x = [];

for(i = 0; i < 10000000; i++){
	x[i] = i;
}

// algorithmus zum sortieren bereitstellen
const sort = () =>{
	console.log('sort');

	console.time('for-loop');
	for(idx = 0; idx < x.length; idx++){
		///
		
	}
	console.timeEnd('for-loop');	

}


sort();