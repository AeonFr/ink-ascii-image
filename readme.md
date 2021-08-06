# ink-ascii-image

Convert images to ascii art in ink apps.

Usage:

```jsx
<Image filePath={require("path").join(__dirname, "../logo.png")} width={50} />
```

Options are passed directly to the [ascii-art-image](https://www.npmjs.com/package/ascii-art-image) constructor, with the exception of `filepath` that was renamed to `filePath`.
