# angular-freezeframe

[![npm version](https://badge.fury.io/js/angular-freezeframe.svg)](https://badge.fury.io/js/angular-freezeframe)
![Size](https://img.shields.io/github/size/ctrl-freaks/freezeframe.js/packages/angular-freezeframe/dist/angular-freezeframe/bundles/angular-freezeframe.umd.min.js.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Examples

GH Pages:

http://ctrl-freaks.github.io/freezeframe.js/angular

## Install

```bash
npm install freezeframe angular-freezeframe
```

## Setup

`app.module.ts`

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFreezeframeComponent } from 'angular-freezeframe'

@NgModule({
  declarations: [
    AppComponent,
    AngularFreezeframeComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Basic usage

`app.component.html`

```html
<angular-freezeframe src="foo.gif"></angular-freezeframe>
```

## Advanced usage

Here's an example of passing custom options, and binding to a ref using `ViewChild` so we can manually trigger playback.

`app.component.html`

```html
<button (click)="start()">Start</button>
<button (click)="stop()">Stop</button>
<button (click)="toggle()">Toggle</button>

<angular-freezeframe
  src="foo.gif"
  #freeze
  [options]="{
    trigger: false,
    overlay: true
  }"
  (startEvent)="log('start', $event)"
  (stopEvent)="log('stop', $event)"
  (toggleEvent)="log('toggle', $event)"
></angular-freezeframe>
```

`app.component.ts`

```ts
import { Component, ViewChild } from '@angular/core';
import { AngularFreezeframeComponent, AngularFreezeframeEvent } from 'angular-freezeframe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-freezeframe-demo';
  destroyerVisible = true

  @ViewChild('freeze') freeze!: AngularFreezeframeComponent

  start(): void {
    this.freeze?.start()
  }

  stop(): void {
    this.freeze?.stop()
  }

  toggle(): void {
    this.freeze?.toggle()
  }

  destroy(): void {
    this.destroyerVisible = false
  }

  log(eventName: string, $event: AngularFreezeframeEvent): void {
    console.log({ eventName, $event })
  }
}

```

## Children

You can also pass gifs as children, they will all inherit the any options passed to the parent component.

```html
<angular-freezeframe
  [options]="{
    trigger: 'click'
  }"
>
  <img src="foo1.gif" />
  <img src="foo2.gif" />
  <img src="foo3.gif" />
</angular-freezeframe>
```

## Props

### Options

The `options` prop accepts all options allowed by [freezeframe core](../freezeframe#options)

```html
<angular-freezeframe
  src="foo.gif"
  [options]="{
    overlay: false,
    trigger: 'click'
  }"
></angular-freezeframe>
```

### Event Listeners

The following event emitters will fire when freezeframe emits the corresponding events:

- startEvent - 'start'
- stopEvent - 'stop'
- toggleEvent - 'toggle'

```html
<angular-freezeframe
  src="foo.gif"
  (startEvent)="log('start', $event)"
  (stopEvent)="log('stop', $event)"
  (toggleEvent)="log('toggle', $event)"
></angular-freezeframe>
```

## Contributing

Assuming you have already read the [instructions](../../README.md#contributing) in the project root:

- First, `cd` into the appropriate package directory

```bash
# start webpack dev server
npm start
```

```bash
# lint and fix issues with eslint
npm run lint -- --fix
```

```bash
# run unit tests
npm test
```

```bash
# build the project and examples for gh-pages
npm run build
```

Then commit your changes and submit your PR for review.

## License

angular-freezeframe.js is released under the terms of the MIT License.
