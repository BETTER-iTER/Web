import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme } = createStitches({
  theme: {
    colors: {
      White: '#fff',
      Brand: '#8787f4',
      // Black: '#0A0A0A', default 컬러
      TitleBlack: '#24292F',
      ErrorRed: '#f34f45',

      Gray10: '#d8dbe2',
      Gray20: '#c1c4cc',
      Gray30: '#8e9198',
      Gray40: '#62646A',
      Gray50: '#4C4E55',

      Grey600: '#666F7B',

      kakaoYello: '#fae100',

      WH02: '#CCCED8',
      WH03: '#9BA0A7',
    },
  },
  utils: {
    bodyText: (level: 1 | 2 | 3) => {
      if (level === 1) {
        return {
          fontSize: '15px',
          fontWeight: '600',
          letterSpacing: '-0.3px',
        };
      } else if (level === 2) {
        return {
          fontSize: '14px',
          fontWeight: '400',
          letterSpacing: '-0.28px',
        };
      }
      return {
        fontSize: '11px',
        fontWeight: '400',
        letterSpacing: '-0.55px',
        lineHeight: '15px',
      };
    },
  },
  media: {
    bp1: '(min-width: 390px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
});
