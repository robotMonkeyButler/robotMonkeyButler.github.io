export function PublicationImage({ src, alt }: { src: string; alt: string }) {
  return <img
    src={src}
    alt={alt}
    width={440}
    height={300}
    loading="lazy"
  />;
}
