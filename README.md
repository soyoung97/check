# check
**check** is a *JavaScript* OpenSource utility library,
for logging and data checking.

## Table Of Contents
- [Installation](#installation)
- [Type Comparison](#Type Comparison)
- [Value Replacement](#Value Replacement)
- [Math](#math)
- [Objects](#objects)
- [Parsing](#parsing)
- [Strings](#strings)
- [Testing](#testing)



## Installation

```html
<script type="text/javascript" src="/path/to/check.js"></script>
```


## Type Comparison

**CompareType**

Returns true if all of the arguments are of the same type, and false otherwise.

- `arg1, arg2, arg3` is the values you wish to test the type.
- The number of parameters are not limited.
- Notice this function doesn't give you console.log results.

```javascript
const isSame = check.compareType(arg1, arg2, arg3 ... );
```
Example Usage:
```javascript
return check.compareType(“string1”, “string2”) // This will return true
return check.compareType(“string1”, 1) // This will return false
```
**CompareTypeShow**

Returns true if all of the arguments are of the same type, and false otherwise.

- `arg1, arg2, arg3` is the values you wish to test the type.
- The number of parameters are not limited.
- Notice this function **does** give you console.log results.

```javascript
const isSame = check.compareTypeShow(arg1, arg2, arg3 ... );
```
Example Usage:
```javascript
return check.compareTypeShow(“string1”, “string2”) // This will return true, along with the console.log results
return check.compareTypeShow(“string1”, 1) // This will return false, along with the console.log results
```

## Value Replacement

when working with web services, 
we use the api from the back-end server to retrieve data.
Often, the data sent is incomplete in the developing stage, and this may result in errors or build failures for our javascript code.

Many times we get the **ReferenceError: cannnot get ** of null** Error. 
To avoid this, we provide a way to simply replace data from (null, undefined, or user-defined value) to particular value,
to make developing easier.
Other than theses usages, you can `deep` replace a particular value from dictionary objects in a very simple way.


**FillNull**

When given and `toFill`,
converts the given `object` with `null` values replaced by `toFill`.

This function will look **deep** into all keys in dictionaries until it replaces all occurrences of null value to `toFill`.

- `object' should be a dictionary object. This is the object that you want to use for replacing value.
- `toFill` is the value you want to fill at the previous replace value.
- Notice the original value of the value will be **replaced** after executing this function.
- `showLog` will show console.log() if set to true. (default = true)
if it is set to `false`, the function will not produce any console.log() results.

```javascript
const replaced_dict = check.fill(object, toFill, showLog=true);
```
Example Usage:
```javascript
my_dict = {'key1': 'val', 'key2': null, 'key3': {'key3-1': null, 'key3-2': 2}}
check.fill(my_dict, '$$$');
// now, my_dict is {'key1': 'val', 'key2': '$$$', 'key3': {'key3-1': '$$$', 'key3-2': 2}}
```
**FillUndefined**

When given and `toFill`,
converts the given `object` with `undefined` values replaced by `toFill`.

This function will look **deep** into all keys in dictionaries until it replaces all occurrences of undefined value to `toFill`.

- `object' should be a dictionary object. This is the object that you want to use for replacing value.
- `toFill` is the value you want to fill at the previous replace value.
- Notice the original value of the value will be **replaced** after executing this function.
- `showLog` will show console.log() if set to true. (default = true)
if it is set to `false`, the function will not produce any console.log() results.

```javascript
const replaced_dict = check.fill(object, toFill, showLog=true);
```
Example Usage:
```javascript
my_dict = {'key1': 'val', 'key2': undefined, 'key3': {'key3-1': undefined, 'key3-2': 2}}
check.fill(my_dict, '$$$');
// now, my_dict is {'key1': 'val', 'key2': '$$$', 'key3': {'key3-1': '$$$', 'key3-2': 2}}
```


**Fill**

When given `replaceValue` and `toFill`,
converts the given `object` with the values of `replaceValue` replaced by `toFill`.

This function will look **deep** into all keys in dictionaries until it replaces all occurrences of `replaceValue` to `toFill`.

- `object' should be a dictionary object. This is the object that you want to use for replacing value.
- `replaceValue` is the value you want to replace.
- `toFill` is the value you want to fill at the previous replace value.
- Notice the original value of the value will be **replaced** after executing this function.
- `showLog` will show console.log() if set to true. (default = true)
if it is set to `false`, the function will not produce any console.log() results.

```javascript
const replaced_dict = check.fill(object, replaceValue, toFill, showLog=true);
```
Example Usage:
```javascript
my_dict = {'key1': 'val', 'key2': '@@@', 'key3': {'key3-1': '@@@', 'key3-2': 2}}
check.fill(my_dict, '@@@', '$$$');
// now, my_dict is {'key1': 'val', 'key2': '$$$', 'key3': {'key3-1': '$$$', 'key3-2': 2}}
```
*
