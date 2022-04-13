import { Config } from '@stencil/core';

export const config: Config = {
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://conference.ionicframework.com/', 
      copy: [
        { src: 'robots.txt' }
      ]
    }
  ],
  globalStyle: 'src/global.css'
};
