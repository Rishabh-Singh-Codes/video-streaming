const Button = ({name}) => {
    return (
        <div className="mt-8">
            <button className="px-4 py-1 m-2 bg-gray-400 rounded-lg text-white font-semibold text-md">{name}</button>
        </div>
    )
}

export default Button;