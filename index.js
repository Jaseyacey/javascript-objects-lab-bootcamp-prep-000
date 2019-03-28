var recipes = {
  
};

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

function updateObjectWithKeyAndValue(object, key, value) {

  return object.assign({}, obj, {[key]: value})
}
