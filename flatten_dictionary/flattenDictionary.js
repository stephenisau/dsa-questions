/*
Flatten a Dictionary
A dictionary is a type of data structure that is supported natively in all major interpreted languages such as JavaScript, Python, Ruby and PHP, where it’s known as an Object, Dictionary, Hash and Array, respectively. In simple terms, a dictionary is a collection of unique keys and their values. The values can typically be of any primitive type (i.e an integer, boolean, double, string etc) or other dictionaries (dictionaries can be nested). However, for this exercise assume that values are either an integer, a string or another dictionary.

Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .

If you’re using a compiled language such Java, C++, C#, Swift and Go, you may want to use a Map/Dictionary/Hash Table that maps strings (keys) to a generic type (e.g. Object in Java, AnyObject in Swift etc.) to allow nested dictionaries.

If a certain key is empty, it should be excluded from the output (see e in the example below).

Example:

input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }

output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }
*/

function flattenDictionary(dict) {
  let retObj = {};

  function _helper(prevKey, dict, retObj) {
    for (let key in dict) {
      let currVal = dict[key];
      if (!retObj[currVal]) {
        if (prevKey === null) {
          retObj[key] = currVal;
        } else {
          let newKey = `${prevKey}.${key}`;
          retObj[newKey] = currVal;
        }
      }
      else {
        if (prevKey === null) {
          _helper(key, currVal, retObj)
        } else {
          let newKey = `${prevKey}.${key}`;
          _helper(newKey, currVal, retObj);
        }
      }
    }
  }

  _helper("", dict, retObj);
  return retObj;

}