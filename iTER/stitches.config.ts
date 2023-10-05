import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme } = createStitches({
  theme: {
    colors: {
      White: '#fff',
      Brand: '#8787f4',
      Black: '#242424',
      TitleBlack: '#24292F',
      ErrorRed: '#f34f45',

      Gray10: '#d8dbe2',
      Gray20: '#c1c4cc',
      Gray30: '#8e9198',
      Gray40: '#535659',
      Gray50: '#36383a',

      kakaoYello: '#fae100',
    },
  },
  utils: {
    bodyText: (level: 1 | 2) => {
      if (level === 1) {
        return {
          fontSize: '15px',
          fontWeight: '600',
          letterSpacing: '-0.3px',
        };
      }
      return {
        fontSize: '14px',
        fontWeight: '400',
        letterSpacing: '-0.28px',
      };
    },
  },
  media: {
    bp1: '(min-width: 390px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
});
