import './Button.css'

export default function Button(props) {
    const { buttonRole, text, action } = props;
    return (
        <button
            onClick={action}
            className={buttonRole}
        >
            {text}
        </button>
    )
}