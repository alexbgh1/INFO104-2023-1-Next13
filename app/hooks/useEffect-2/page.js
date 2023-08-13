import SubLayout from "@/app/components/sub-layout";
import ClientComponent from "./ClientComponent";

export const metadata = {
  title: "useEffect 2",
  description: "Esta es la página de useEffect 2",
};

// Utilizar useEffect
export default function useEffect2() {
  return (
    <SubLayout pageId="hooks">
      <ClientComponent />
    </SubLayout>
  );
}
