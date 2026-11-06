import { Button, Reveal } from "@/components/ui";
import { ProductCatalog } from "@/features/products/components";

export function Products() {
  return (
    <section id="tienda" className="section products-section" aria-labelledby="products-title">
      <Reveal className="products-heading">
        <h2 id="products-title">ARTE SIN LÍMITES.<br /><span>HISTORIAS<br />SIN FIN</span></h2>
        <p>Encuentros y momentos compartidos con personalidades que forman parte de nuestra historia.</p>
      </Reveal>
      <ProductCatalog context="home" />
      <div className="products-action">
        <Button href="/tienda" variant="secondary" arrow>Ver todas las fotografías</Button>
      </div>
    </section>
  );
}
