import SubLayout from "@/app/components/sub-layout";

export const metadata = {
  title: "Probar Cosas",
  description: "Zona para añadir o probar cosas.",
};

export default function ProbarCosas() {
  return (
    <SubLayout pageId="probar-cosas">
      <div className="container">
        <h1 className="title">Probar Cosas</h1>
        <p className="text">Zona para añadir o probar cosas.</p>
      </div>
    </SubLayout>
  );
}
