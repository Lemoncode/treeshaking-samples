# Barrels and treeshaking


# Steps

- Install _babel-plugin-import_

```bash
npm install babel-plugin-import --save-dev
```

- Add to _.babelrc_

_.babelrc_

```diff
{
  "presets": [
    [
      "env",
      {
        "modules": false
      }
    ]
  ],
+  {
+    ["import", {"libraryName": "material-ui", "libraryDirectory": "", "camel2DashComponentName": false}]
+  }
}
```

> IMPORTANT: This doesn't work if you split into a vendor chunk.
