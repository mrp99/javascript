let vetor = [1,2,3,4,5];
let vetor2 = ['banana','cenoura'];

function iterarVetor(vetor) {
    if(vetor.length == 0){
        throw new Error("O vetor precisa ter pelo menos um elemento dentro dele!");
    } else {
        for(let i = 0; i < vetor.length; i++){
            console.log(i)
        }
    }
}

function vetorVazio(){
    if(vetor.length > 0){
        throw new Error("O vetor não pode ter elementos!");
    } else {
        console.log("Agora está certo!")
    }
}

iterarVetor(vetor);
iterarVetor(vetor2);
