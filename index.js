function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign ({},obj,{[key]:value}); 
}

const recipes= {};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value; 
  return object;
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}