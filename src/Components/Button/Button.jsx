import './Button.css'

export default function Button(props) {
    const { buttonRole, text, action, type,title } = props;
    return (
        <button
            onClick={() => action(title)}
            className={buttonRole}
            type={type}
        >
            {text}
        </button>
    )
}