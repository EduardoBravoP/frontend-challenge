import Link from "next/link";

interface LinksProps {
  active: string;
}

export default function Links({ active }: LinksProps) {
  return (
    <div className="flex gap-8">
      <Link href="/">
        <a
          className={active === "Início" ? "border-b border-blue-default" : ""}
        >
          Início
        </a>
      </Link>

      <Link href="/planos">
        <a
          className={active === "Planos" ? "border-b border-blue-default" : ""}
        >
          Planos
        </a>
      </Link>

      <Link href="/sobre">
        <a className={active === "Sobre" ? "border-b border-blue-default" : ""}>
          Sobre
        </a>
      </Link>

      <Link href="/contato">
        <a
          className={active === "Contato" ? "border-b border-blue-default" : ""}
        >
          Contato
        </a>
      </Link>
    </div>
  );
}
