# words finder for Hunting Word

Developed by [@Francisco5g](https://github.com/Francisco5g)

## Use
---

```js
import Finder from 'hunting-word'

const finder = Finder(grid, 'foo')
```
The **`grid`** is a array with same size of length and width.

```js
const grid = [
  'foo',
  'nhs',
  'kql'
]
```


### Matchers
```js
import { seachByColumn } from 'hunting-word'

Finder(grid, 'foo').addMatcher(seachByColumn)
// {
//   searchingPattern: 'foo',
//   result: [ 
//     [{ 
//        method: 'search_by_row', 
//        found: true, 
//        coords: ...
//     }] 
//   ]
// }
```