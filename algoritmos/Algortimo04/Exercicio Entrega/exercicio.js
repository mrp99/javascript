let imcPess = {
	nome: 'Fulano',
	sexo: 'M',
	peso: 80,
	altura: 1.72,
	imcCal: function(){
	return (this.peso/this.altura**2)
	},
	imcCond: function(valor){
	if(valor > 30){
		alert(true);
	}else{
		alert(false);
		}
	}
};

console.log(imcPess);
console.log(imcCal(80, 1.7, imcCond));