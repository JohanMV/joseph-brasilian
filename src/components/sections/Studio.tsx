import { Check } from "@phosphor-icons/react";
import { Button, Reveal } from "@/components/ui";

const assurances = ["Material esterilizado y descartable", "Diseño original para cada anatomía", "Seguimiento durante la cicatrización"];

export function Studio() {
  return (
    <section id="estudio" className="studio-section">
      <div className="studio-image"><img src="/images/estudio.webp" alt="Interior y artista del estudio RIE TATTOOS" loading="lazy" /></div>
      <Reveal className="studio-copy">
        <h2>UN ESTUDIO<br />HECHO PARA<br /><span>CREAR CON CALMA</span></h2>
        <p>Trabajamos con cita previa para dedicar tiempo real a cada idea. El espacio, los materiales y el proceso responden a un solo estándar: hacer las cosas bien.</p>
        <div className="assurance-list">
          {assurances.map((item) => <div key={item}><Check size={18} weight="bold" aria-hidden="true" /><span>{item}</span></div>)}
        </div>
        <p>Av. P.º de la República 5761, Miraflores 15047</p>
        <Button href="https://www.google.com/maps/place/(Joseph+Brasilian+Tattoo)+Studio+de+Tatuajes+y+Escuela+Profesional+para+Tatuadores/@-12.123084,-77.0243722,2218m/data=!3m2!1e3!4b1!4m6!3m5!1s0x9105c81b737c2d15:0x25b1c30bb2ccc173!8m2!3d-12.123084!4d-77.0243722!16s%2Fg%2F11c532f7dg?entry=ttu&g_ep=EgoyMDI2MTEwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" variant="secondary" arrow>Visita el estudio</Button>
      </Reveal>
    </section>
  );
}
