type ButtonProps = {

    variant: 'primary' | 'secondary',
    children : string,

} &Omit<React.ComponentProps<'button'>,'children'>//need to specify button props to include html button props in addition to special props

export const CustomButton = ({variant, children, ...rest} : ButtonProps) =>{
    return <button className={`class-with-${variant}`}{...rest}>{children}</button>
}