# useKeyup

Get window size by hooks `keyup` event without side-effect.

## Install

```sh
$ npm install use-keyup
```

## How to use?

This example will auto removeEventListener when component unmounted.

```javascript
import useKeyup from 'use-keyup';
const demo = () => {
  const [key, setKey] = useState([]);
  useKeyup(e => setKey(e.code));
  return <p>keyup {key}</p>;
};
```

Explicity Clean the handler.

```javascript
import useKeyup from 'use-keyup';
const demo = () => {
  const [key, setKey] = useState([]);
  const [cleanUp] = useKeyup(e => setKey(e.code));
  useEffect(() => {
    setTimeout(cleanup, 3000);
    // Set timer when mounted & after 3sec clean keyup
  }, []);
  return <p>keyup {key}</p>;
};
```

## What I Do?

Call clean-up function (to `removeEventListener`) when component has been unmounted.

Also, I export a `cleanUp` function, you can use this to explicity remove events when you need.

## Why This has a dependency of `useEventTarget`

This is a hooks infrastructure for easily package a event hooks.

See more [useEventTarget](https://github.com/realdennis/useEventTarget/).
