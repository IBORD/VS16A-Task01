import NavItem from '../navitem/NavItem';

interface NavBarProps {
  items: {
    href: string;
    label: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}

const NavBar = ({ items, className = '' }: NavBarProps) => {
  return (
    <nav className={`bg-blue-800 p-4 ${className}`}>
      <ul className="flex space-x-4">
        {items.map((item) => (
          <NavItem 
            key={item.href} 
            href={item.href} 
            label={item.label} 
            icon={item.icon}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar