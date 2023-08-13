import SubLayout from "@/app/components/sub-layout";
import ClientComponent from "@/app/hooks/useState-2/ClientComponent";

export const metadata = {
  title: "useState 2",
  description: "Esta es la página de useState 2",
};

// Utilizar useState
export default function useState2() {
  return (
    <SubLayout pageId="hooks">
      <div className="container">
        <h1 className="title">useState 2</h1>
        <ClientComponent />
      </div>
    </SubLayout>
  );
}
