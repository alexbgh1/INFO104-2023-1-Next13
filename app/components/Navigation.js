"use client";
import styles from "@/app/styles/General-Layout.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({ links }) => {
  // Si no hay links, o no es un array, no se renderiza nada
  if (!links || links.length === 0) {
    return null;
  }

  const pathname = usePathname();

  return (
    <header className={styles.navigation}>
      <nav className={styles.navigation__navbar}>
        <ul className={styles.navigation__navbar_list}>
          {/*
             Recordar que .map es un método para recorrer un array
             
             También se está aplicando desestructuración, digamos que le llamo "item" a cada elemento del array
             Lo normal sería acceder como "item.href" e "item.label", al desestructurar con {href, label}
             se puede acceder directamente a "href" y "label"
            
            */}
          {links.map(({ href, label }) => (
            <li
              key={`${href}${label}`}
              className={pathname === href ? styles.navigation__active : ""}
            >
              <Link href={`${href}`}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
