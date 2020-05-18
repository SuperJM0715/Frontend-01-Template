function match(string){
   let state = start;
   for(let c of string){
    state = state(c);
   }
   return state === end;
}

function start(c){
  if(c === 'a'){
    return foundA;
  }else{
    return start;
  }
}

function end(){
  return end;
}

function foundA(c){
  if(c === 'b'){
    return foundB;
  }else{
    return state(c);
  }
}

function foundB(c){
  if(c === 'c'){
    return foundC;
  }else{
    return state(c);
  }
}

function foundC(c){
  if(c === 'd'){
    return foundD;
  }else{
    return state(c);
  }
}

function foundD(c){
  if(c === 'e'){
    return foundE;
  }else{
    return state(c);
  }
}

function foundE(c){
  if(c === 'f'){
    return end;
  }
}
