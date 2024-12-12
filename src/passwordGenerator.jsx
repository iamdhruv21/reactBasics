import {useState, useCallback, useEffect, useRef} from "react";

function PasswordGenerator() {

    const [length, setLength] = useState(8)
    const [numberAllowed, setAllowedNumber] = useState(false)
    const [charAllowed, setCharNumber] = useState(false)
    const [password, setPassword] = useState('')

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = ''
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += '0123456789'
        if (charAllowed) str += '!@#$%^&*()+=-|{}[]<>?'

        for (let i = 1; i <= length; i++){
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed, setPassword])

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])

    const copyPassword = useCallback(() => {
        passwordRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }, [password])

    return (
        <>
            <div className="w-screen h-screen bg-gray-700 fixed top-0">
                <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 text-orange-500 border border-white mt-16">
                    <h1 className="text-white text-center my-3">Password Generator</h1>
                    <div className="flex shadow rounded-lg overflow-hidden mb-4">
                        <input type="text" value={password} ref={passwordRef} className='outline-none w-full py-1 px-3' placeholder="password" readOnly/>
                        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
                    </div>
                    <div className="flex text-sm gap-x-2">
                        <div className="flex items-center gap-x-1">
                            <input type="range" min={6} max={20} value={length} className='cursor-pointer'
                                   onChange={(e) => {
                                       setLength(e.target.value)
                                   }}/>
                            <label>Length: {length}</label>
                        </div>

                        <div className="flex items-center gap-x-1 ml-4">
                            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
                                setAllowedNumber((prev) => !prev);
                            }}/>
                            <label htmlFor="numberInput">Number</label>
                        </div>

                        <div className="flex items-center gap-x-1 ml-4">
                            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => {
                                setCharNumber((prev) => !prev);
                            }}/>
                            <label htmlFor="charInput">Character</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PasswordGenerator;