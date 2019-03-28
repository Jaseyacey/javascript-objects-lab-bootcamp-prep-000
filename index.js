var recipes = {};

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

function UpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}
