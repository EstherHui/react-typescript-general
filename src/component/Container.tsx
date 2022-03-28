type ContainerProps = {
    style : React.CSSProperties //remember it use to style with css
}

export const Container = (props : ContainerProps) => {
    return <div style = {props.style}>Text content goes here</div>
}