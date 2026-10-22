import { createFileRoute } from "@tanstack/react-router";
import {
  Scale, Users, Briefcase, Home, Shield, FileText, Phone, MapPin, Clock, Star,
  MessageCircle, Quote, Search, Gavel, ExternalLink,
} from "lucide-react";
import { estudio, waLink } from "@/lib/estudio";

const iconos = { scale: Scale, users: Users, briefcase: Briefcase, home: Home, shield: Shield, file: FileText };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${estudio.nombre} | Abogados en ${estudio.ciudad}` },
      { name: "description", content: `${estudio.nombre}: estudio jurídico en ${estudio.ciudad}. Consultá por WhatsApp y recibí asesoramiento legal.` },
      { property: "og:title", content: `${estudio.nombre} | Estudio jurídico` },
      { property: "og:description", content: `Asesoramiento legal en ${estudio.ciudad}. Escribinos por WhatsApp.` },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WaButton({ texto = "Consultar por WhatsApp" }: { texto?: string }) {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa">
      <MessageCircle className="h-5 w-5" /> {texto}
    </a>
  );
}

function Index() {
  const anio = new Date().getFullYear();
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#inicio" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded border border-primary text-primary">
              <Scale className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-semibold">{estudio.nombre}</span>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#areas" className="hover:text-primary">Áreas</a>
            <a href="#como-trabajamos" className="hover:text-primary">Cómo trabajamos</a>
            <a href="#resenas" className="hover:text-primary">Opiniones</a>
            <a href="#contacto" className="hover:text-primary">Contacto</a>
          </nav>
          <WaButton texto="WhatsApp" />
        </div>
      </header>

      <section id="inicio" className="bg-hero pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">{estudio.rubro} · {estudio.ciudad}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Defendemos tus derechos con <span className="text-primary">compromiso y claridad</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Contanos tu caso y te orientamos sobre los pasos a seguir. Atención personalizada a cargo de {estudio.titular}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WaButton />
            <a href={`tel:${estudio.telefonoLink}`} className="btn-outline">
              <Phone className="h-5 w-5" /> Llamar
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 rounded border bg-surface px-4 py-2">
              <Star className="h-4 w-4 fill-primary text-primary" />
              {estudio.valoracion && estudio.cantidadResenas
                ? <span><strong>{estudio.valoracion}</strong> · {estudio.cantidadResenas} opiniones en Google</span>
                : <span>[Valoración] · [Cantidad] opiniones en Google</span>}
            </div>
            <div className="flex items-center gap-2 rounded border bg-surface px-4 py-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>{estudio.horarios[0]?.dia}: {estudio.horarios[0]?.horas}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Áreas de práctica</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">¿En qué te podemos ayudar?</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {estudio.areas.map((a, i) => {
              const Icono = iconos[a.icono as keyof typeof iconos] ?? Scale;
              return (
                <div key={i} className="bg-card p-8 transition-colors hover:bg-secondary">
                  <Icono className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-semibold">{a.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="como-trabajamos" className="border-y bg-surface py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Cómo trabajamos</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Un proceso claro, de principio a fin</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { i: MessageCircle, t: "1. Primera consulta", d: "Nos escribís por WhatsApp y coordinamos una reunión para conocer tu situación." },
              { i: Search, t: "2. Análisis del caso", d: "Revisamos la documentación y te explicamos tus opciones en lenguaje simple." },
              { i: Gavel, t: "3. Estrategia y seguimiento", d: "Definimos juntos el camino a seguir y te mantenemos al tanto de cada avance." },
            ].map(({ i: I, t, d }) => (
              <div key={t}>
                <I className="h-7 w-7 text-primary" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resenas" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow">Opiniones en Google</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Lo que dicen nuestros clientes</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {estudio.resenas.map((r, i) => (
              <figure key={i} className="rounded-lg border bg-card p-7 shadow-elegant">
                <Quote className="h-6 w-6 text-primary" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed">“{r.texto}”</blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-primary">— {r.autor}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t bg-surface py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Hablemos de tu caso</h2>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary" />{estudio.direccion}, {estudio.ciudad}</li>
              <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-primary" /><a href={`tel:${estudio.telefonoLink}`} className="hover:text-primary">{estudio.telefono}</a></li>
              <li className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-primary" />
                <div>{estudio.horarios.map((h) => <p key={h.dia}>{h.dia}: {h.horas}</p>)}</div>
              </li>
            </ul>
            {estudio.redes.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                {estudio.redes.map((r) => (
                  <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:underline">
                    {r.nombre} <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <WaButton />
              <a href={`tel:${estudio.telefonoLink}`} className="btn-outline"><Phone className="h-5 w-5" /> Llamar</a>
            </div>
          </div>
          <div className="min-h-80 overflow-hidden rounded-lg border bg-card">
            {estudio.mapaEmbedUrl ? (
              <iframe title={`Mapa de ${estudio.nombre}`} src={estudio.mapaEmbedUrl} className="h-full min-h-80 w-full" loading="lazy" />
            ) : (
              <div className="grid h-full min-h-80 place-items-center text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> [Mapa de Google]</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {anio} {estudio.nombre}. Todos los derechos reservados.</p>
          <p>{estudio.titular} · {estudio.matricula}</p>
        </div>
      </footer>
    </div>
  );
}
