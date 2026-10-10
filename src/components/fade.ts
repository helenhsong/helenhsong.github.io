import type { CSSProperties } from 'react'

// Where a line falls in the page's fade-in order.
export const fadeIndex = (index: number) => ({ '--fade-index': index }) as CSSProperties
