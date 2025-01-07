/* eslint-disable react/prop-types */
const ButtonComponent = function(props) {
    console.log(props);
    return (
        <button type="button">{props.text}</button>
    )
}

export default ButtonComponent;