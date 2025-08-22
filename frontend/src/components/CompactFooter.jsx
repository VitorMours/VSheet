export default function CompactFooter() {
  return (
    <footer className="footer items-center justify-center p-4 bg-base-200 text-neutral-content">
      <div className="items-center grid-flow-col text-black">
        <p>
          App desenvolvido por{" "}
          <a
            href="#"
            className="link link-hover font-semibold"
          >
            João Vitor Rezende Moura 
          </a>
            <strong> </strong>
           © {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>

    </footer>
  );
}