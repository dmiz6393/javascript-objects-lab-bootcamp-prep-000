function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign ({},obj,{[key]:value}); 
}

const recipes= {};

function 