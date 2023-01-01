import { useState } from "react";

const Contador = () => {
    const [counter, setCounter] = useState(0);//declarando contador y declaradora del contador e iniciando en 0
    return (
        <div style={{
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid red"
        }}>{/*los estilos en línea tendrán prioridad sobre los importados de otro archivo*/}
            <h1 id="cuenta">Contador: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
    );
};

export default Contador;
