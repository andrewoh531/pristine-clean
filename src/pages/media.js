import { css } from 'styled-components'


const min = size => `(min-width: ${size})`
// const max = size => `(max-width: ${size})`

const tablet = min('40em')
const desktop = min('52em')
const largeDesktop = min('64em')

const breakpoint = size => (...args) => css`
  @media ${size} {
    ${css(...args)};
  }
`
export { tablet, desktop, largeDesktop }

export default {
  tablet: breakpoint(tablet),
  desktop: breakpoint(desktop),
  largeDesktop: breakpoint(largeDesktop)
}
