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
      <a target="_blank" href="https://docs.zora.co">Powered by Gear, Inc.</a>
    </footer>
  )
}
