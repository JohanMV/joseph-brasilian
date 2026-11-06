import { useEffect, useRef, useState } from "react";
import { CaretRight, X } from "@phosphor-icons/react";
import type { Product } from "@/types";
import { useBodyLock } from "@/hooks/useBodyLock";
import { productCategories } from "../data/products";

interface ProductCatalogProps {
  context: "home" | "store";
}

function ProductImageGallery({ product }: { product: Product }) {
  const images = product.images?.length ? product.images.slice(0, 4) : [product.image];
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);
  const total = images.length;
  const currentImage = images[current] ?? images[0];
  const next = () => setCurrent((index) => (index + 1) % total);
  const closeLightbox = () => dialogRef.current?.close();
  const imageAlt = total > 1 ? `${product.imageAlt}. Vista ${current + 1} de ${total}` : product.imageAlt;

  useBodyLock(expanded);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (expanded && !dialog.open) dialog.showModal();
    if (!expanded && dialog.open) dialog.close();
  }, [expanded]);

  useEffect(() => {
    if (!expanded) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      closeLightbox();
    };
    document.addEventListener("keydown", handleEscape, true);
    return () => document.removeEventListener("keydown", handleEscape, true);
  }, [expanded]);

  return (
    <>
    <div className={`product-image${total > 1 ? " product-gallery" : ""}`}>
      <button ref={expandButtonRef} type="button" className="gallery-expand" onClick={() => setExpanded(true)} aria-label={`Ampliar imagen de ${product.name}`}>
      <img
        key={currentImage}
        src={currentImage}
        alt={imageAlt}
        width="900"
        height="1100"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        style={product.imagePosition ? { objectPosition: product.imagePosition } : undefined}
      />
      </button>
      {total > 1 && (
        <>
          <span className="product-gallery-counter" aria-live="polite">
            {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <div className="product-gallery-navigation">
            <button type="button" onClick={next} aria-label={`Ver foto siguiente de ${product.name}`}>
              <CaretRight size={18} weight="bold" aria-hidden="true" />
            </button>
          </div>
          <div className="product-gallery-progress" aria-hidden="true">
            {images.map((image, index) => (
              <span key={image} className={index === current ? "active" : ""} />
            ))}
          </div>
        </>
      )}
    </div>
    <dialog
      ref={dialogRef}
      className="portfolio-lightbox"
      aria-label={`Imagen ampliada de ${product.name}`}
      onClose={() => { setExpanded(false); expandButtonRef.current?.focus(); }}
      onCancel={(event) => { event.preventDefault(); closeLightbox(); }}
      onClick={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}
    >
      <button type="button" className="portfolio-lightbox-close" onClick={closeLightbox} aria-label="Cerrar imagen ampliada">
        <X size={26} weight="bold" aria-hidden="true" />
      </button>
      <div className="portfolio-lightbox-media" onClick={(event) => { if (event.target === event.currentTarget) closeLightbox(); }}>
        <img src={currentImage} alt={imageAlt} />
      </div>
    </dialog>
    </>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <ProductImageGallery product={product} />
      <div className="product-meta">
        <div>
          <h3>{product.name}</h3>
        </div>
      </div>
    </article>
  );
}

export function ProductCatalog({ context }: ProductCatalogProps) {
  const photographs = productCategories.find((category) => category.id === "famosos")?.products ?? [];

  return (
    <div className={`product-catalog product-catalog-${context}`}>
      <div className="product-panel">
        <div className="product-grid">
          {photographs.slice(0, context === "home" ? 4 : undefined).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
