function match(string){
  let foundA = false;
  let foundB = false;
  let foundC = false;
  let foundD = false;
  let foundE = false;
  for(let c of string){
    if(c === 'a'){
      foundA = true;
    }else if(foundA && c === 'b'){
      foundB = true;
    }else if(foundB && c === 'c'){
      foundC = true;
    }else if(foundC && c === 'd'){
      foundD = true;
    }else if(foundD && c === 'e'){
      foundE = true;
    }else if(foundE && c === 'f'){
      return true;
    }else{
      let foundA = false;
      let foundB = false;
      let foundC = false;
      let foundD = false;
      let foundE = false;
    }
  }
  return false;
}

match('abcdefgd');  // 匹配是否有连续的 abcdef 字符串
