import { Component, Element, h } from '@stencil/core';

@Component({
  tag: 'page-about-popover',
  styleUrl: 'page-about-popover.css'
})
export class PageAboutPopover {
  @Element() el: HTMLElement;

  close(url: string) {
    window.open(url, '_blank');
    this.dismiss();
  }

  async support() {
    const nav: HTMLIonRouterElement = document.querySelector("ion-router");
    nav.push('support', 'root');
    this.dismiss();
  }

  dismiss() {
    (this.el.closest('ion-popover') as any).dismiss();
  }

  render() {
    return [
      <ion-list>
        <ion-item href="http://ionicframework.com/docs/getting-started" >
          <ion-label>Learn Ionic</ion-label>
        </ion-item>
        <ion-item href="http://ionicframework.com/docs/">
          <ion-label>Documentation</ion-label>
        </ion-item>
        <ion-item href="http://showcase.ionicframework.com">
          <ion-label>Showcase</ion-label>
        </ion-item>
        <ion-item href="https://github.com/ionic-team/ionic">
          <ion-label>GitHub Repo</ion-label>
        </ion-item>
        <ion-item onClick={() => this.support()}>
          <ion-label>Support</ion-label>
        </ion-item>
        <ion-item onClick={() => this.dismiss()}>
          <ion-label>Dismiss</ion-label>
        </ion-item>
      </ion-list>
    ];
  }
}
