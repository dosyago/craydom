# :bug: [dumbass](https://github.com/dosyago/dumbass) [![npm](https://img.shields.io/npm/v/dumbass.svg?label=&color=0080FF)](https://github.com/dosyago/dumbass/releases/latest)

> Chosen by toddlers, insects, imbeciles and stupid coders.

Make components from cross-browser web standards. No JSX, no Shadow DOM, no fancy framworks, no opinions.

- **Just HTML, CSS and JavaScript**—No JSX, no Shadow DOM, no fancy frameworks, no opinions. 
- **Stop learning, stagnate!**—Use the syntax you already know. Stop learning new things. Do more with what's already here.
- **Crazy and fun, but in a serious way**—Dumbass is the tool for people who don't want to think too hard to make UI. 

*To learn more*...oh wait, you already know enough. Read on to see 1 example and install mantras.

## Quickstart

Install dumbass with npm:

```console
npm i --save dumbass
```

Use [Parcel](https://parceljs.org) or [Webpack](https://webpack.js.org) and import:

```js
import { R, X } from "dumbass"
```

[See a CodeSandbox demonstration of above](https://codesandbox.io/s/dumbass-playground-7drzg)

Or import in a module:

```html
<script type="module">
  import { R, X } from "https://unpkg.com/dumbass"
</script>
```

[See a CodePen demo of above](https://codepen.io/dosycorp/pen/OJPQQzB?editors=1000)

### Spinner Example

Here's the last example you'll ever need:
[Try online here](https://codepen.io/dosycorp/pen/OJPQQzB?editors=1000).

```jsx
<!DOCTYPE html>
<html lang="en">
  <head> 
    <script type="module">
      import { R } from "https://unpkg.com/dumbass";
      
      let state = 500,
        last = 0;

      const inc = () => state++;
      const dec = () => state--;
      
      const spin = e => {
        e.deltaY > 0 ? inc() : dec();
        Spin(state);
      };
      const step = e => {
        state = e.target.value || 0;
        Spin(state);
      };
      const move = e => {
        const delta = last - e.touches[0].pageY;
        last = e.touches[0].pageY;
        delta > 0 ? inc() : dec();
        Spin(state);
      };

      Spin(state).to("body", "beforeEnd");

      function Spin(n) {
        return R`  
          <div 
            wheel:passive=${spin}
            touchmove:passive=${move}
          >
            <h1>
              <progress 
                max=1000
                value=${n}
              ></progress>
              <hr>
              <input 
                input=${step}
                type=number 
                value=${n}>
          </div>
        `;
      }
    </script>
  </head>
  <body>
  </body>
</html>
```

See [more code](https://github.com/dosyago/dumbass/blob/master/tests/rvanillatodo/src/app.js) in a 250 line [TodoMVC test](https://dosyago.github.io/dumbass/tests/rvanillatodo/)
