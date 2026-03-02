interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const menuItems = ['inicio', 'sobre-mi', 'proyectos', 'habilidades', 'contacto'];

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-10">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#inicio" className="text-xl font-bold text-blue-600">
            AHR
          </a>
          <ul className="hidden md:flex gap-6 text-sm">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`hover:text-blue-600 transition ${activeSection === item ? 'text-blue-600 font-medium' : 'text-gray-600'
                    }`}
                  onClick={() => setActiveSection(item)}
                >
                  {item === 'sobre-mi' ? 'Sobre mí' : item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;