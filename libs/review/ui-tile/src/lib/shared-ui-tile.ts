import './tile-styles';

export class GridElement extends HTMLElement {}
customElements.define('bgboard-grid', GridElement);
export class TileElement extends HTMLElement {}
customElements.define('bgboard-tile', TileElement);
export class TileTitleElement extends HTMLElement {}
customElements.define('bgboard-tile-title', TileTitleElement);
export class TileLeftCornerElement extends HTMLElement {}
customElements.define('bgboard-tile-left-corner', TileLeftCornerElement);
export class TileRightCornerElement extends HTMLElement {}
customElements.define('bgboard-tile-right-corner', TileRightCornerElement);
export class ImageWrapperElement extends HTMLElement {}
customElements.define('bgboard-image-wrapper', ImageWrapperElement);

// Helper to add JSX types in *.tsx files
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type JSXify<T extends Element> = Partial<
  Omit<T, 'children'> & { children?: any[] | any }
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'bgboard-grid': JSXify<GridElement>;
      'bgboard-tile': JSXify<TileElement>;
      'bgboard-tile-title': JSXify<TileTitleElement>;
      'bgboard-tile-left-corner': JSXify<TileLeftCornerElement>;
      'bgboard-tile-right-corner': JSXify<TileRightCornerElement>;
      'bgboard-image-wrapper': JSXify<ImageWrapperElement>;
    }
  }
}
