//Este será un contenedor que se renderizará en todos los componentes usando la propiedad children.
import Navigation from "./navigation";        //Importamos el componente de navegación.

const Container = (props) => (                //Aquí generamos la función
  <div>
    <Navigation />                            {/* Traemos el componente Navigation */}
    <div>{props.children}</div>               {/* Le decimos a Container que aquí deberá mostrar sus "hijos" */}
  </div>
);

export default Container;                       //Exportamos por defecto, el elemento.
