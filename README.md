# emojiterator

Emoji Generator

```bash
npm install emojiterator
```

## Usage

```JavaScript
> emojiterator = require('emojiterator')
{ evil: [Function: evil] }
> evils = emojiterator.evil()
{}
> evils.next()
{ value: '🙊', done: false }
> evils.next()
{ value: '🙈', done: false }
> evils.next()
{ value: '🙉', done: false }
> // Evil never finishes
```
