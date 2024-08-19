export type BaseHeadProps = Partial<{
  author: string
  description: string
  keywords: string[]
  thumb: string
  title: string
}>

export interface BaseLayoutProps extends BaseHeadProps {}
