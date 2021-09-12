// Libraries
import { css } from 'styled-components'
import { FlattenInterpolation, ThemeProps } from 'styled-components'

type MediaQueriesType = Record<
   string,
   (...args: any[]) => FlattenInterpolation<ThemeProps<unknown>>
>

export const breakpoints: { [key: string]: number } = {
   mobileS: 320,
   mobileM: 375,
   mobileL: 425,
   tablet: 728,
   tabletL: 848,
   laptop: 1065,
   laptopL: 1440,
   desktop: 2560,
}

const mediaQueries: MediaQueriesType = Object.keys(breakpoints).reduce(
   (acc: MediaQueriesType, label: string) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      acc[label] = (literals: TemplateStringsArray, ...args: any[]) => css`
         @media (min-width: ${breakpoints[label]}px) {
            ${css(literals, ...args)}
         }
      `
      return acc
   },
   {}
)

export default mediaQueries
