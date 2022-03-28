type headProps = {
    children : string
}

export const Heading = (props : headProps) => {
    return <h2>{props.children}</h2>
}