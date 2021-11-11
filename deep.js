/**
 * 深浅拷贝
 */

// 浅拷贝
function shallowClone(obj) {
  if (typeof obj !== "object") return;
  let newObj = obj instanceof Array ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
}
