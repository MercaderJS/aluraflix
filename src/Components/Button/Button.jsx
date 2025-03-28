import './Button.css'

export default function Button(props) {
    const { buttonRole, text, action, type, id} = props;
    
    return (
        <button
            onClick={() => action(id)}
            className={buttonRole}
            type={type}
        >
            {text}
        </button>
    )
}