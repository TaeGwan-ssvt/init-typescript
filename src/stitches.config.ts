import { createStitches } from '@stitches/react';

export const {
  styled, // 스타일 컴포넌트 생성
  css, // 클래스이름을 생성하고 해당 클래스이름에 css를 넣을 수 있음
  globalCss, // 전역 css설정
  keyframes, // 애니메이션 설정
  getCssText, // 서버사이드랜더링?
  theme, // 아래 스타일로 테마들을 설정할 수 있음
  // $를 붙이면 미리보기가 나옴
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
    },
    sizes: {
      blockSize: '100px',
    },
    radii: {
      radius: '30px',
    },
  },
  media: {
    mobile: '(min-width: 0px)',
    tableSm: '(min-width: 600px)',
    tableLg: '(min-width: 960px)',
    desktop: '(min-width: 1280px)',
  },
  utils: {
    paddingX: (value: number | string) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: number | string) => ({ paddingTop: value, paddingBottom: value }),
    color: (value: string) => ({ color: value }),
    // border: (size, style, color) => ({ border: `${size} ${style} ${color}` }) // 이런식으로는 안되나
  },
});

// utils를 제외한 토큰정의(?)는 css한개만 적용시키는 건가
// utils는 여러 css를 적용 and 동적인 파라미터를 받아서 적용
