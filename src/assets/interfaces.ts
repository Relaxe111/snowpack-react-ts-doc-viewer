import type Icon from '@ant-design/icons'

type ExtractProps<TComponentOrTProps> = TComponentOrTProps extends React.ComponentType<infer TProps>
    ? TProps
    : TComponentOrTProps

export type IconProps = ExtractProps<typeof Icon>
