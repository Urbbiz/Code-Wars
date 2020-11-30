



function solution (str) {

    let backWords ='';

    for(let i=str.length-1; i>=0; i--) {
     const letter = str [i];
        backWords += letter;
    
    }
    return backWords;
  
}

solution('world');
solution('hello');