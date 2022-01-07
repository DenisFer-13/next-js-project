//En esta línea habitualmente importaríamos React, pero al trabajar con NextJs no es necesario.
import Container from "../components/Container";

const Index = () => {                       //Luego de crea una función en una constante, que luego se exporta
    return (
        <Container>
            <h1>HOLA MUNDO.</h1>
        </Container>
    )
}

export default Index;                       //Aquí se exporta por defecto Index.