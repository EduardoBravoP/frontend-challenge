import Link from "next/link";

interface LinksProps {
  active: string;
}

export default function Links({ active }: LinksProps) {
  return (
    <div className="gap-8 hidden md:flex">
      <Link href="/">
        <a
          className={
            active === "Início" ? "border-b border-blue-default h-8 px-2" : ""
          }
        >
          Início
        </a>
      </Link>

      <Link href="/planos">
        <a
          className={
            active === "Planos" ? "border-b border-blue-default h-8 px-2" : ""
          }
        >
          Planos
        </a>
      </Link>

      <Link href="/sobre">
        <a
          className={
            active === "Sobre" ? "border-b border-blue-default h-8 px-2" : ""
          }
        >
          Sobre
        </a>
      </Link>

      <Link href="/contato">
        <a
          className={
            active === "Contato" ? "border-b border-blue-default h-8 px-2" : ""
          }
        >
          Contato
        </a>
      </Link>
    </div>
  );
}
