/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Node } from 'butterfly-dag';
import $ from 'jquery';
import './node.less';
import { CusHelloWorld } from './utils/defineElement';

class BaseNode extends Node {
  constructor(opts: any) {
    super(opts);
    console.log(opts);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.options = opts;
  }
  draw = (opts: any) => {
    console.log(opts);


    const elememt = new CusHelloWorld({ opts })
       $(elememt).attr('id', opts.id)
      .css('top', opts.top + 'px')
      .css('left', opts.left + 'px')
      .css('width', 82 + 'px')
      .css('height', 82 + 'px')
      .addClass(opts.options.className);
    console.log(elememt);

    return elememt;


    const container = $('<div class="login-base-node"></div>')
      .attr('id', opts.id)
      .css('top', opts.top + 'px')
      .css('left', opts.left + 'px')
      .addClass(opts.options.className);

    if (opts.options.circleType === 'border') {
      let textContainer;

      if (opts.options.label2) {
        textContainer = $(`<div class="text-box2 line-height"></div>`)[0];
        const span1 = $(`<span>${opts.options.label}</span>`)[0];
        const span2 = $(`<span>${opts.options.label2}</span>`)[0];

        textContainer.append(span1);
        textContainer.append(span2);
      } else {
        textContainer = $(`<div class="text-box2">${opts.options.label}</div>`)[0];
      }

      const btn = $(`<button class="btn-login">+</button>`)[0];
      btn.addEventListener('click', () => console.log(opts.options))
      textContainer.append(btn);
      container.append(textContainer);

      return container[0];
    }

    // this._createTypeIcon(container);
    // this._createText(container);

    return container[0];
  }
  // _createTypeIcon(dom = this.dom) {
  //   const iconContainer = $(`<div class="icon-box"></div>`)[0];
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   const icon = $(`<i class="iconfont ${this.options.iconType}"></i>`)[0];

  //   iconContainer.append(icon);
  //   $(dom).append(iconContainer);
  // }

  // _createText(dom = this.dom) {
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   $('<span class="text-box"></span>').text(this.options.label).appendTo(dom);
  // }
}

export default BaseNode;
