function match(element, selector){
    if(!selector || !element.attributes){
        return false;
    }
    if(selector.charAt(0) === "#"){
        const attr = element.attributes.filter(attr => attr.name === "id")[0];
        if(attr && attr.value === selector.replace("#",'')){
            return true;
        }
    }else if(selector.charAt(0) === "."){
        const attr = element.attributes.filter(attr => attr.name === "class")[0];
        if(attr && attr.value === selector.replace(".",'')){
            return true;
        }
        if (attr) {
            const attrClassArray = attr.value.split(' ')
            for (let attrClass of attrClassArray) {
              if (attrClass === selector.replace(".", '')) {
                return true
              }
            }
          }
    }else{
        if(element.tagName === selector){
            return true;
        }
    }
    return false;
}
