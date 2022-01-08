//Este será un contenedor que se renderizará en todos los componentes usando la propiedad children.
import Navigation from "./navigation";

const Container = (props) => (
  <div>
    <Navigation />
    <div>{props.children}</div>
  </div>
);

export default Container;
