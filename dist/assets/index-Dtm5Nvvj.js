import{dE as l,ff as n,dI as s,dJ as o,dL as c,dM as r}from"./index-PAhymuf7.js";import{E as d,B as h,f as m}from"./label-81ge4K9f.js";import"./dom-BMWJYfMU.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const b={container:"container"},p=c`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, .5rem)}:host([scale=m]) .container{gap:.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, .75rem)}:host([scale=l]) .container{gap:.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1);color:var(--calcite-label-text-color, var(--calcite-color-text-1))}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:.5rem}:host([layout=inline][scale=l]) .container{gap:.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity: 1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity: 0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`,e=class e extends l{constructor(){super(),this.alignment="start",this.layout="default",this.scale="m",this.calciteInternalLabelClick=n({bubbles:!1,cancelable:!1}),this.listen("click",this.labelClickHandler)}connectedCallback(){super.connectedCallback(),document.dispatchEvent(new CustomEvent(d))}willUpdate(t){t.has("for")&&h(this.el)}disconnectedCallback(){super.disconnectedCallback(),document.dispatchEvent(new CustomEvent(m))}labelClickHandler(t){var i;((i=window.getSelection())==null?void 0:i.type)!=="Range"&&this.calciteInternalLabelClick.emit({sourceEvent:t})}render(){return o`<div class=${s(b.container)}><slot></slot></div>`}};e.properties={alignment:3,for:3,layout:3,scale:3},e.styles=p;let a=e;r("calcite-label",a);export{a as Label};
