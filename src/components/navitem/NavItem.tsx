import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

const NavItem = ({ href, label, icon }: NavItemProps) => (
  <li>
    <Link
      href={href}
      className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
    >
      {icon && <span>{icon}</span>}
      {label}
    </Link>
  </li>
);
export default NavItem