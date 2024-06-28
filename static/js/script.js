
let texto = 'Bienvenido a Baco!';
let index = 0;
let title = document.getElementById('title');

const funcionalidad = ()=>{
	if(index < texto.length){
    title.textContent+= texto.charAt(index);
    index++;
	}
	setTimeout(funcionalidad,100)
}
funcionalidad();
