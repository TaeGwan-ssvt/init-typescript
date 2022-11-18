import { css } from '@stitches/react';

function Css() {
  return (
    <div>
      <div className={button()}>asdf</div>
      <div className={button({ variant: 'primary' })}>asdf</div>
      <div className={button({ variant: 'secondary' })}>asdf</div>
    </div>
  );
}

const button = css({
  background: 'Black', // 기본 스타일

  variants: {
    variant: {
      primary: {
        background: 'red',
      },
      secondary: {
        background: 'blue',
      },
    },
  },
});

export default Css;
