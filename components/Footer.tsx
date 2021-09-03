import { css } from '@emotion/react'

export const Footer = () => {
  return (
    <footer css={css`
      height: var(--footer-height);
      border-top: var(--border-grey);
      background-color: var(--grey);
      a {
        text-decoration: none;
      }
    `}>
      <a target="_blank" href="https://gearforpunks.com">Gear up.</a>
    </footer>
  )
}
