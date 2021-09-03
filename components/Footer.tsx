import { css } from '@emotion/react'

export const Footer = () => {
  return (
    <footer css={css`
      height: var(--footer-height);
      border-top: var(--border-#1a1b1f);
      background-color: var(--#1a1b1f);
      a {
        text-decoration: none;
      }
    `}>
      <a target="_blank" href="https://gearforpunks.com">Gear up.</a>
    </footer>
  )
}
