import './Button.css'

export default function Button(props) {
    const { buttonRole, text, action, type } = props;
    return (
        <button
            onClick={action}
            className={buttonRole}
            type={type}
        >
            {text}
        </button>
    )
}