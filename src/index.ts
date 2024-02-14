import type { BlazorWebAssemblyAppExtension } from 'blazor-wasm-single-spa';

// NOTE: Ideally we would have better type declarations for each object we save, but there don't
// appear to be any available. Likely we would need to create our own if we choose to go that route.
type MudBlazorState = {
  mudWindow: any;
  mudResizeObserver: any;
  mudScrollSpy: any;
  mudJsEvent: any;
  mudElementRef: any;
  mudResizeListener: any;
  mudResizeListenerFactory: any;
  mudKeyInterceptor: any;
  mudThrottledEventManager: any;
  mudEventProjections: any;
  mudScrollListener: any;
  mudpopoverHelper: any;
  mudPopover: any;
  mudDragAndDrop: any;
  mudScrollManager: any;
  darkModeChange: (x: any) => any;
  getTabbableElements: (element: any) => any;
  serializeParameter: (data: any, spec: any) => any;
};

export default function mudBlazorExtension(): BlazorWebAssemblyAppExtension {
  const mudBlazorState: MudBlazorState = {
    mudWindow: undefined,
    mudResizeObserver: undefined,
    mudScrollSpy: undefined,
    mudJsEvent: undefined,
    mudElementRef: undefined,
    mudResizeListener: undefined,
    mudResizeListenerFactory: undefined,
    mudKeyInterceptor: undefined,
    mudThrottledEventManager: undefined,
    mudEventProjections: undefined,
    mudScrollListener: undefined,
    mudpopoverHelper: undefined,
    mudPopover: undefined,
    mudDragAndDrop: undefined,
    mudScrollManager: undefined,
    darkModeChange: () => undefined,
    getTabbableElements: () => undefined,
    serializeParameter: () => undefined,
  };

  return {
    stylePaths: ['_content/MudBlazor/MudBlazor.min.css'],
    additionalImportPaths: ['_content/MudBlazor/MudBlazor.min.js'],
    beforeBlazorStart: () => {
      for (let key in mudBlazorState) {
        if (mudBlazorState.hasOwnProperty(key)) {
          // @ts-ignore objects within mudBlazorState are of type 'any'
          mudBlazorState[key] = window[key];
        }
      }
    },

    afterBlazorRestore: () => {
      for (let key in mudBlazorState) {
        if (mudBlazorState.hasOwnProperty(key)) {
          // @ts-ignore objects within mudBlazorState are of type 'any'
          window[key] = mudBlazorState[key];
        }
      }
    },

    afterBlazorClear: () => {
      for (let key in mudBlazorState) {
        if (mudBlazorState.hasOwnProperty(key)) {
          // @ts-ignore key type is 'any'.
          delete window[key];
        }
      }
    },
  };
}
