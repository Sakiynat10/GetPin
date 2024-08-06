"use client"

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./style.scss"

const NavLink = ({
  children,
  href,
  className = "",
  ...props
}) => {
  const pathname = usePathname();
  const pathnameActive = pathname.split("/")
  return (
    <Link
    className={pathname === href ? `active ${className}` :  className} href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;