import { css } from '@emotion/react'

export const Footer = () => {
  return (
    <footer css={css`
      height: var(--footer-height);
      border-top: var(--border-white);
      a {
        text-decoration: none;
      }
    `}>
      <a target="_blank" href="https://gearforpunks.com">Get your Gear on.</a>
    </footer>
  )
}
