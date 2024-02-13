# MudBlazor Extension for blazor-wasm-single-spa

Experimental extension for [blazor-wasm-single-spa](https://www.npmjs.com/package/blazor-wasm-single-spa)
that provides micro-frontend support of MudBlazor. This works by clearing and restoring global state
MudBlazor adds to the global window object when it is first initialized. The clearing and restoring
occurs when a Blazor WASM micro-frontend unmounted and mounted, respectively, by single-spa.

## Usage

```javascript
import singleSpaBlazor from "blazor-wasm-single-spa";
import mudBlazorExtension from "blazor-wasm-ext-mud-blazor";

export const { bootstrap, mount, unmount } = singleSpaBlazor({
  // Typical configuration
  appTagName: 'my-blazor-app',
  assetBaseUrl: new URL('https://mysite.com/app/my-blazor-app/'),
  navigationBaseUrl: new URL('https://mysite.com/blazor-app/'),
  stylePaths: ['css/app.css', 'MyBlazorApp.Client.styles.css'],
  additionalImportPaths: ['my-js-interop.js'],

  // NEW: Adding MudBlazor app extension
  appExtension: [mudBlazorExtension],
});
```
