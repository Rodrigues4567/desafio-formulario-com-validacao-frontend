
function Input({ type = "text", register, name, error, placeholder }) {
    return (
        <>
            <div>

                <input
                    type={type}
                    {...register(name)}
                    placeholder={placeholder}
                    className="w-full p-2 border rounded-[7px] mobile:text-[14px]"
                />
                {error && <p className="text-red-500">{error.message}</p>}

            </div>
        </>
    )
}

export default Input
