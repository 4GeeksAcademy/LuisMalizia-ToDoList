import React, { useState } from "react";

const Home = () => {
    const [inputValue, setInpuValue] = useState("");
    const [tarea, setTarea] = useState([]);


    return (
        <div className="container d-flex flex-column align-items-center">
            <h1>Mis Tareas</h1>
            <input className="input-group mb-3 w-50" type="text" onChange={(e) => setInpuValue(e.target.value)}
                value={inputValue}
                onKeyUp={(e) => {
                    if (e.key === "Enter") {
                        setTarea(tarea.concat([inputValue]));
                        setInpuValue((""))
                    }
                }} />
            <ul className="list-group w-50 d-flex justify-content-between">
                {tarea.map((insert, index) => (
                    <li className="list-group-item d-flex justify-content-between " >
                        {insert}   <svg onClick={() =>
                            setTarea(
                                tarea.filter(
                                    (insert, actualIndex) => index != actualIndex
                                )
                            )
                        } className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                    </li>
                ))}
            </ul>
            <div className="len">{tarea.length} tareas</div>
        </div>
    );
};

export default Home;
