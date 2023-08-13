import SubLayout from "@/app/components/sub-layout";

export const metadata = {
  title: "useEffect",
  description: "Esta es la página de useEffect",
};

// Utilizar useEffect
export default function useEffectT() {
  return (
    <SubLayout pageId="hooks">
      <div className="container">
        <h1 className="title">useEffect</h1>
        <p className="text"></p>
      </div>
    </SubLayout>
  );
}
