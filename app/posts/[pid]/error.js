"use client";
import { usePathname } from "next/navigation";
const Error = () => {
  const params = usePathname();
  return (
    <div>
      Error Cargando el post <span style={{ fontWeight: "700" }}>{params}</span>
    </div>
  );
};

export default Error;
