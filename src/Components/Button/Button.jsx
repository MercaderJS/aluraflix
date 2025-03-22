import './Button.css'

export default function Button(props) {
    const { buttonRole, text, action, type, id} = props;
    console.log(id);
    
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