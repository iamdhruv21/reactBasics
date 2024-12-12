import {useState} from "react";

function BgChanger() {
    const [color, setColor] = useState('blue')

    return (
        <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl text-white">
                    <div className="px-3 cursor-pointer py-2 rounded-3xl bg-blue-500" onClick={() => {setColor("blue")}}>Blue</div>
                    <div className="px-3 cursor-pointer py-2 rounded-3xl bg-green-500" onClick={() => {setColor("green")}}>Green</div>
                    <div className="px-3 cursor-pointer py-2 rounded-3xl bg-red-500" onClick={() => {setColor("red")}}>Red</div>
                    <div className="px-3 cursor-pointer py-2 rounded-3xl bg-yellow-500 text-black" onClick={() => {setColor("yellow")}}>Yellow</div>
                    <div className="px-3 cursor-pointer py-2 rounded-3xl bg-pink-500" onClick={() => {setColor("pink")}}>Pink</div>
                </div>
            </div>
        </div>
    );
}

export default BgChanger;