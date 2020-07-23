const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i])
        }
      } else {
        let values = Object.values(collection)
        for (let i = 0; i < values.length; i++) {
          callback(values[i])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newArray = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newArray.push(callback(collection[i]))
        }
      } else {
        let values = Object.values(collection)
        for (let i = 0; i < values.length; i++) {
          newArray.push(callback(values[i]))
        }
      }
      return newArray
    },

    reduce: function(collection, callback, acc=0) {
      for (let i = 0; i < collection.length; i++) {
       acc = callback(acc, collection[i])
      }
      return acc
    },

    find: function(collection, predicate) {
      if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }} else {
        let values = Object.values(collection)
        for (let i = 0; i < values.length; i++) {
          if (predicate(values[i])) {
            return values[i]
          }
      }}
    },

    filter: function(collection, predicate) {
      let array = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          array.push(collection[i])
        }
      }
      return array
    },

    size: function (collection) {
      let num = 0
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          if (collection[i] != null) {
            num += 1
          }
        }
      } else {
        let values = Object.values(collection)
        for (let i = 0; i < values.length; i++) {
          if (values[i] != null) {
            num += 1
          }
        }
      }
      return num
    },

    first: function (array, n=1) {
      if (n === 1) {
        return array[0]
      } else {
        let newArray = []
        for (let i = 0; i < n; i++) {
          newArray.push(array[i])
      }
      return newArray
    }
    },

    last: function (array, n=1) {
      let length = array.length - 1
      if (n === 1) {
        return array[length]
      } else {
        let newArray = []
        for (let i = length; i > 0; i--) {
          newArray.push(array[i])
      }
      return newArray.reverse()
    }
    },

    compact: function (array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function (array, callback) {
      let newArray = [...array]
      newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
      return newArray
    },

    flatten: function (array, shallow, newArray = []){
      if (!Array.isArray(array)) {
        newArray.push(array)
      }
      if (shallow) {
        for (let element of array) {
          if (Array.isArray(element)) {
            for (let i of element) {
              newArray.push(i)
            }
          } else {
            newArray.push(element)
          }
        }
      } else {
        for (let element of array) {
          if (Array.isArray(element)) {
            for (let i of element) {
              if (Array.isArray(i)) {
                for (let b of i) {
                  if (Array.isArray(b)) {
                    for (let c of b) {
                      newArray.push(c)
                    }
                  } else {
                    newArray.push(b)
                  }
                }
              } else {
                newArray.push(i)
              }
            }
          } else {
            newArray.push(element)
          }
        }
      }
      return newArray
    },

    uniq: function (array, isSorted, callback) {
      let newArray = []
      let callbackValues = []
        if (!!callback) {
          for (let i = 0; i < array.length; i++) {
            if (!callbackValues.includes(callback(array[i]))) {
              callbackValues.push(callback(array[i]))
              newArray.push(array[i])
            }
          }
        } else {
          for (let i = 0; i < array.length; i++)
            if (!newArray.includes(array[i])) {
              newArray.push(array[i])
          }
        }
      return newArray
    },

    keys: function(object) {
      let objectKeys = []
      for (const key in object) {
        objectKeys.push(key)
      }
      return objectKeys
    },

    values: function(object) {
      let objectValues = []
      for (const key in object) {
        objectValues.push(object[key])
      }
      return objectValues
    },
    
    functions: function(object) {
      let functionNames = []
      for (const func in object) {
        if (typeof object[func] === 'function') {
          functionNames.push(func)
        }
      }
      return functionNames
    }

  }
})()

fi.libraryMethod()
