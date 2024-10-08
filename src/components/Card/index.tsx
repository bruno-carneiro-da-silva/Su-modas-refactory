import { CardSupplierProps } from "@/types/Supplier";
import Button from "@/components/Button";
import KebabMenu from "@/components/KebabMenu";
import { KebabMenuItem } from "@/types/table";

interface CardPropsWithMenu {
  kebabMenuItems: KebabMenuItem[];
  item: CardSupplierProps;
  icon: React.ReactNode;
  secondIcon: React.ReactNode;
}

const filterData = (
  data: CardSupplierProps
): Record<string, string | number> => {
  const filteredData: Record<string, string | number> = {};
  for (const key in data) {
    if (typeof data[key] === "string" || typeof data[key] === "number") {
      filteredData[key] = data[key] as string | number;
    }
  }
  return filteredData;
};

export const Card = ({
  icon,
  secondIcon,
  kebabMenuItems,
  item,
}: CardPropsWithMenu) => {
  return (
    <div className="bg-white rounded-xl mt-10 border-gray-300 border p-4 flex w-[330px] h-[352px] flex-col items-center relative">
      <div className="absolute top-2 right-2">
        <KebabMenu items={kebabMenuItems} data={filterData(item)} />
      </div>
      <div className="mt-4 flex flex-col items-center justify-center">
        <img src={item.url} alt="placeholder" className="rounded-full mb-4" />
        <h1 className="text-center text-2xl text-primary-dark font-bold mb-2">
          {item.name}
        </h1>
        <span className="text-center mb-4 text-gray-400">{item.product}</span>
      </div>
      <div className="flex space-x-2">
        <Button
          className="bg-primary-dark"
          onClick={() => console.log("clicked")}
        >
          {icon}
        </Button>
        <Button
          className="bg-primary-dark"
          onClick={() => console.log("clicked")}
        >
          {secondIcon}
        </Button>
      </div>
    </div>
  );
};

Card.displayName = "Card";
export type CardType = CardPropsWithMenu;
export default Card;
