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
  console.log(pathnameActive[pathnameActive - 1])
  return (
    <Link
    className={pathnameActive[pathnameActive.length - 1] === href ? `active ${className}` :  className} href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;