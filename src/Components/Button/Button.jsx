import './Button.css'

export default function Button(props) {
    const { text, action, type, id, selector} = props;
    
    return (
        <button
            onClick={() => action(id)}
            className={selector}
            type={type}
        >
            {text}
        </button>
    )
}