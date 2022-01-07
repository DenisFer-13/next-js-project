//En esta línea habitualmente importaríamos React, pero al trabajar con NextJs no es necesario.
import Navigation from "../components/navigation";

const Index = () => {                       //Luego de crea una función en una constante, que luego se exporta
    return (
        <div>
            <Navigation />
            <h1>HOLA MUNDO.</h1>
        </div>
    )
}

export default Index;                       //Aquí se exporta por defecto Index.