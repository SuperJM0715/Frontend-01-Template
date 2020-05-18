function match(string){
  for(let c of string){
    if(c === 'a'){
      return true;
    }
  }
  return false;
}

match('cba'); // 查找字符串中是否含有 a
