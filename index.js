var recipes = {};
function updateObjectWithKeyndValue(object, key, value) {
  return object.assign({}, object, {[key]: value}); 
}
