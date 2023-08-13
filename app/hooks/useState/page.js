import SubLayout from "@/app/components/sub-layout";

export const metadata = {
  title: "useState",
  description: "Esta es la página de useState",
};

export default function useStateT() {
  return (
    <SubLayout pageId="hooks">
      <div className="container">
        <h1 className="title">useState</h1>
        <p className="text"></p>
      </div>
    </SubLayout>
  );
}
