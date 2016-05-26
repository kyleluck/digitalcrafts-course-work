# JSON

* JSON is a subset of JS, but much more strict
* all keys have to be quoted using double quotes - no single quotes
* types supported: arrays, objects, numbers, strings, true, false, and null
* cannot have a trailing comma in arrays or object literals

## Examples

Right:

```
{
  "name": "Bob",
  "age": 9
}
```

Wrong:

```
{
  name: "Bob",
  age: 9
}
```

Wrong:

```
{
  'name': 'Bob',
  'age': 9
}
```
