# check

**check** is a _JavaScript_ OpenSource utility library,
for logging and data checking.

## Table Of Contents

- [Setup](#Setup)
- [Pretty Print](#Pretty_Print)
- [Type Checking](#Type_Checking)
- [Type Comparison](#Type_Comparison)
- [Value Replacement](#Value_Replacement)

## Setup

```bash
npm install
```

- Default:

```bash
npm run build
```

- Options(Build by category):
  - `type` option: supports `compareTypeShow, compareType, isSymbol, isBigInt, isNull, isObj, isStr, isUndefined, isBool, isFunc` functions
  - `fill` option: supports `fill, fillNull, fillUndefined` functions
  - `print` option: supports a `print` function
  - `all` option: supports all functions in the library

```bash
npm run build -- --env.opt=<all|type|fill|print>
```

You can see `app.js` created in the current folder.

- Web

```html
<script type="text/javascript" src="/path/to/app.js"></script>
```

## Pretty_Print

**print**

pretty-prints the `argument` we want to print.
**print** also shows the **original name** of the value, along with the value of the `argument`.

- it needs to be executed inside a function.

```javascript
const my_print = '%%%%%';
check.print(my_print);
```

```bash
Requested line[2]: check.print(my_print);
my_print: %%%%%
```

## Type_Checking

**isSymbol**

Returns true if argument is of type Symbol, and false otherwise.

Show console.log() if showLog=true. (default = true)

Console.logs only when false are returned.

- `argument` is the value you wish to check the type.
- The number of parameters are limited to 1.

```javascript
const isSame = check.isSymbol(argument, (showLog = true));
```

Example Usage:

```javascript
const isSame = check.isSymbol(3); // isSame is false
//console.log()
//   check.isSymbol():
//   variable 3 type is number, not symbol
```

**isBigInt**

Returns true if argument is of type BigInt, and false otherwise.

**isNull**

Returns true if argument is of type Null, and false otherwise.

**isNum**

Returns true if argument is of type Num, and false otherwise.

**isObj**

Returns true if argument is of type Object, and false otherwise.

- if `allowNull` is true, isObj(null) returns true. (default=true)

**isStr**

Returns true if argument is of type String, and false otherwise.

**isUndefined**

Returns true if argument is Undefined, and false otherwise.

**isBool**

Returns true if argument is of type Boolean, and false otherwise.

**isFunc**

Returns true if argument is of type Function, and false otherwise.

## Type_Comparison

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

## Value_Replacement

when working with web services,
we use the api from the back-end server to retrieve data.
Often, the data sent is incomplete in the developing stage, and this may result in errors or build failures for our javascript code.

Many times we get the **ReferenceError: cannnot get ** of null\*\* Error.
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
const replaced_dict = check.fillNull(object, toFill, (showLog = true));
```

Example Usage:

```javascript
my_dict = { key1: 'val', key2: null, key3: { 'key3-1': null, 'key3-2': 2 } };
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
const replaced_dict = check.fillUndefined(object, toFill, (showLog = true));
```

Example Usage:

```javascript
my_dict = {
  key1: 'val',
  key2: undefined,
  key3: { 'key3-1': undefined, 'key3-2': 2 }
};
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
const replaced_dict = check.fill(
  object,
  replaceValue,
  toFill,
  (showLog = true)
);
```

Example Usage:

```javascript
my_dict = { key1: 'val', key2: '@@@', key3: { 'key3-1': '@@@', 'key3-2': 2 } };
check.fill(my_dict, '@@@', '$$$');
// now, my_dict is {'key1': 'val', 'key2': '$$$', 'key3': {'key3-1': '$$$', 'key3-2': 2}}
```

\*
