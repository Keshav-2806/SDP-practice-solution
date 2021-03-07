function preventChanges(obj) {

	Object.freeze(obj);
  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
}