# 🎨 use-styled-theme

> React hook for getting Styled Components theme values.

[![NPM](https://img.shields.io/npm/v/use-styled-theme.svg)](https://www.npmjs.com/package/use-styled-theme) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i use-styled-theme || yarn add use-styled-theme
```


## Usage

```jsx
import React from 'react'
import { ThemeProvider } from "styled-components";
import useStyledTheme from 'use-styled-theme'

const Component = () => {
  const { color } = useStyledTheme();

  return (
    <div style={{ backgroundColor: color }}>
      <h1>{color}</h1>
    </div>
  );
};

const App = () => (
  <ThemeProvider theme={{ color: "#BADA55" }}>
    <Component />
  </ThemeProvider>
);
```

Example available on [Codesandbox](https://codesandbox.io/s/dark-river-ty06w)

## License

MIT © [markoradak](https://github.com/markoradak)
