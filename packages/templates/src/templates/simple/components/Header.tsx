const Header = () => {
  return (
    <section className="mb-2">
      <h1 className="text-primary text-[42px] font-bold uppercase leading-10 mb-1">Ako Veysinejad</h1>
      <h2 className="text-[22px] font-semibold leading-8">Frontend Developer</h2>
      <div className="flex gap-1 justify-start items-center">
        <span className="text-xs">Tehran, Iran</span>
        <span className="h-3 border-l border-secondary border-opacity-65" />

        <a href="tel:+989357225422" className="text-xs text-link">
          +98 935 722 5422
        </a>
        <span className="h-3 border-l border-secondary border-opacity-65" />

        <a href="mailto:a.veysinejad@gmail.com" className="text-xs text-link">
          a.veysinejad@gmail.com
        </a>
        <span className="h-3 border-l border-secondary border-opacity-65" />

        <a href="https://www.linkedin.com/in/ako-veysinejad/" className="text-xs text-link">
          linkedin.com/in/ako-veysinejad
        </a>
      </div>
    </section>
  );
};
export default Header;
