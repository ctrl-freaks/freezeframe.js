import { html } from 'common-tags';
import styles from './scss/styles.scss';

export const stylesheet = () => (
  html`
    <style>
      ${styles.toString()}
    </style>
  `
);

export const container = () => (
  html`
    <div class="ff-container ff-loading-icon">
    </div>
  `
);

export const canvas = () => (
  html`
    <canvas class="ff-canvas" width="0" height="0">
    </canvas>
  `
);
