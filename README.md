# brutal.js (1.6.4)

Minimalist framework for building JS apps.

## Features

- Uses native JS features and requires no transpilation or build step.
- Fully isomorphic, running browser-side or server-side (with builtin hydration).
- Use normal HTML conventions (omit some end tags, omit quotes, lowercase attr names ~ unlike JSX).
- Add event listeners inline using either the lowercased event name, with or without the standard `on` prefix.
- Small, fast and XSS safe. 
- Can be used in place of Deku, lit-html or React.

## Installing

From NPM:

```shell
$ npm i --save brutalist-web
```

Then using on server with CJS:

```JavaScript
  const {R} = require('brutalist-web');
```

Or using on server with ESM:

```JavaScript
  import {R} from 'brutalist-web';
```

Using on client with the Unpkg CDN:

```HTML
  <script type=module src=https://unpkg.com/brutalist-web/r.js></script>
```

Consider relative paths if you want to self-host.
For example, (you probably wouldn't do this): if you were serving your node_modules directory,
at the `/node_modules` path, and the script importing was serving from the `/app` path, you would import like:

`/app/script.js`:

```JavaScript
  import {R} from '../node_modules/brutalist-web/r.js';
```

*Note: The client imports require you to specify `r.js` while the server does not.
This is owing to the current slightly different syntax and semantics of ES imports
between client and server.*

## Simple Example

This is Brutal.js:

```JavaScript
function ButtonWidget({name}) {
  return R`
    <button click=${() => showModal(name)}>
      Show ${name} Modal
    </button>
  `;
}
```

## More examples

For more extensive examples, [the tests listed above](https://thiscris.com/brutal.js/tests/), or see [a TodoMVC app written in Brutal.js](https://github.com/crislin2046/rvanillatodo). Also take a look at the component code in [Brutestrap UI Kit](https://github.com/crislin2046/brutestrap), a UI Kit being built with Brutal.js (and incorporating [C3S](https://github.com/crislin2046/c3s) for scoping styles to components).

## Basic documentation

### Handlers 

There's two ways to add event handlers to your markup. 

Either directly in the template string with `eventName=${functionValue}` syntax or by passing an object with 
`handlers=${handlersObj}` syntax.

The handlers object must map event names to function values. 

Currently only 1 handler per event per element can be added. 

Example:

```JavaScript
const handlers = {
  click: e => console.log(e),
  mouseover: e => alert(e)
};
R`<input handlers=${handlers}>`
```

is equivalent to:
```JavaScript
R`<input click=${e => console.log(e)} mouseover=${e => alert(e)}>`;
```

## Current Issues 

- R.skip in attribute values turns into replacement placeholder comment tags which can break attribute values and markup.
- But without R.skip how to get around the regular "safe replacement" of special characters?
- Empty arrays are OK as Brutal Objects but not as Func arrays for adding event handlers, because they will become Brutal Objects and leave placeholder comment tags for replacement which breaks attribute values and markup.
- The main issue is Brutal Objects in attribute values, and one reason this occurs is because our decision about which placeholder replacement type to use (comment or key) is based on the type of the value, and not on its "lexical scope" // location.
- This is actaully a feature, since the code is way simpler. But given that I am running into these issues, what's the simple and elegant solution? 
- Needs more thinking.
