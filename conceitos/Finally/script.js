let b = 3;

try {

    let a = 2 + b;
    
    } catch(e){
        console.log(e);
        //throw new Error(e);
    } finally {
        console.log('Executou o programa');
    }
    
    console.log('teste');