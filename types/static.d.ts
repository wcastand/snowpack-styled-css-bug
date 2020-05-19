/* Use this file to declare any custom file extensions for importing */
/* Use this folder to add/extend a package d.ts file, if needed. */
import {} from 'styled-components';
import { CSSProp } from 'styled-components';

declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module 'styled-reset';
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
