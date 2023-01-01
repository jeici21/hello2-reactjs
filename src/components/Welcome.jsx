const Welcome = () => {
    const info = { nombre: 'Jorge', apellido: 'Castro', edad: 30 };
    return (
        <div className="saludo-container">
            <h1>
                Hola mi nombre es: {info.nombre} y mi apellido es: {info['apellido']}
            </h1>{/*dos formas de usar valores dentro de objetos*/}
            <h2>Tengo: {info.edad} años</h2>
        </div>
    );
};

export default Welcome;