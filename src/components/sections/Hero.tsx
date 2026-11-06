import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui";

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  });
  return (
    <section id="inicio" className="hero">
      <img className="hero-image" src="/images/hero.webp" alt="Artista de Joseph Brasilian tatuando un diseño de cóndor" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-content">
        <motion.p className="eyebrow" {...enter(0.1)}>Estudio de tatuajes en Lima</motion.p>
        <motion.h1 aria-label="Joseph Brasilian" {...enter(0.18)}>JOSEPH<br /><span className="hero-name-desktop">BRASILIAN</span><svg className="hero-name-mobile" viewBox="0 0 1000 165" aria-hidden="true" focusable="false"><text x="1" y="145" textLength="998" lengthAdjust="spacingAndGlyphs">BRASILIAN</text></svg></motion.h1>
        <motion.p className="hero-copy" {...enter(0.26)}>Diseños que nacen de tu historia y se ejecutan con precisión.</motion.p>
        <motion.div className="hero-actions" {...enter(0.34)}>
          <Button href="#portafolio">Ver trabajos</Button>
          <Button href="#agenda" variant="secondary">Cotizar tatuaje</Button>
        </motion.div>
      </div>
      <div className="hero-signature" aria-hidden="true">LIMA</div>
    </section>
  );
}
