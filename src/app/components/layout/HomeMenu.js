import Menu_item from "../Menu/Menu_item";
import SectionHeaders from "./SectionHeaders";
export default function HomeMenu() {
  return (
    <section>
      <div className=" mb-8">
        <SectionHeaders subHeader={"check Out"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Menu_item />
        <Menu_item />
        <Menu_item />
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <Menu_item />
        <Menu_item />
        <Menu_item />
      </div>
    </section>
  );
}
