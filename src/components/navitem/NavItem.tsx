import Link from 'next/link'

interface NavItemProps {
  href: string
  label: string
  icon?: React.ReactNode
}

const NavItem = ({ href, label, icon }: NavItemProps) => (
  <li className="w-full">
    <Link
      href={href}
      className="flex items-center gap-2 px-3 py-2 text-white hover:text-yellow-300 transition-colors
                 text-sm sm:text-base w-full"
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="hidden md:inline">{label}</span>
    </Link>
  </li>
)

export default NavItem