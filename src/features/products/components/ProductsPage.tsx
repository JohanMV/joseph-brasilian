import { useEffect } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Navbar } from "@/components/layout";
import type { ProductCategoryId } from "@/types";
import { productCategories } from "../data/products";
import { ProductCatalog } from "./ProductCatalog";

function getInitialCategory(): ProductCategoryId {
  const requested = new URLSearchParams(window.location.search).get("categoria");
  return productCategories.some((category) => category.id === requested)
    ? requested as ProductCategoryId
    : "aftercare";
}

export function ProductsPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Fotografías | Joseph Brasilian";
    return () => { document.title = previousTitle; };
  }, []);

  const syncCategory = (category: ProductCategoryId) => {
    const url = new URL(window.location.href);
    if (category === "aftercare") url.searchParams.delete("categoria");
    else url.searchParams.set("categoria", category);
    window.history.replaceState(null, "", `${url.pathname}${url.search}`);
  };

  return (
    <div className="products-page">
      <Navbar activeItem="Fotografías" ctaLabel="Ver productos" ctaHref="/tienda#catalogo" />

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
          <ProductCatalog context="store" initialCategory={getInitialCategory()} onCategoryChange={syncCategory} />
        </section>
      </main>

      <footer className="products-page-footer">
        <span>© {new Date().getFullYear()} Joseph Brasilian</span>
        <a href="/#agenda">Reservar tatuaje <ArrowUpRight size={16} aria-hidden="true" /></a>
      </footer>
    </div>
  );
}
