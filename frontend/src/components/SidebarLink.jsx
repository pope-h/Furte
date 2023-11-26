import { Link, useLocation } from "react-router-dom"
import classNames from 'classnames'

const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'


const SidebarLink = ({ link }) => {
    const { pathname } = useLocation()

  return (
    <Link
        to={link.path}
        className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
    >
        <span className="text-xl">{link.icon}</span>
        {link.label}
    </Link>
  )
}

export default SidebarLink