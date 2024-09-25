import './main.scss'
const Button = ({ title, color }) => {
    return (
        <>
            <button style={{
                color: color,
                backgroundColor: "white"
            }} className='main-button'>{title}</button>

        </>
    )
}


export default Button