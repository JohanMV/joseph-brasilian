import { useEffect } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Navbar } from "@/components/layout";
import { ProductCatalog } from "./ProductCatalog";

export function ProductsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Fotografías | Joseph Brasilian";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="products-page">
      <Navbar activeItem="Fotografías" ctaLabel="Ver fotografías" ctaHref="/tienda#catalogo" />

      <main>
        <section className="products-page-hero">
          <img className="products-page-hero-image" src="/images/banner_fotografias.webp" alt="" fetchPriority="high" />
          <div className="products-page-hero-content">
            <p className="eyebrow">ARTE Y TRAYECTORIA</p>
            <h1>ARTE SIN LÍMITES.<br /><span>HISTORIAS<br />SIN FIN</span></h1>
            <p>Una trayectoria contada en imágenes: encuentros con personalidades, obras de arte y momentos de nuestra escuela.</p>
          </div>
        </section>

        <section id="catalogo" className="products-archive" aria-labelledby="products-archive-title">
          <div className="products-archive-heading">
            <h2 id="products-archive-title">GALERÍA</h2>
          </div>
          <ProductCatalog context="store" />
        </section>
      </main>

      <footer className="products-page-footer">
        <span>© {new Date().getFullYear()} Joseph Brasilian</span>
        <a href="/#agenda">Reservar tatuaje <ArrowUpRight size={16} aria-hidden="true" /></a>
      </footer>
    </div>
  );
}
