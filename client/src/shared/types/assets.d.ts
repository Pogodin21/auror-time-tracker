   // Определяет тип для SVG импортированных с ?react
   declare module '*.svg?react' {
    import React from 'react'
    const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    export default Component
  }

  // Определяет тип для обычных SVG импортов
  declare module '*.svg' {
    const content: string
    export default content
  }