import { useSelector } from "react-redux";
import BagItem from "../Components/Bag.Item";
import BagSummary from "../Components/Bag.summary";

const Bag = () => {
  const bagItems = useSelector(state => state.bag);
  const items = useSelector(state => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id)
    return itemIndex > 0;
  });

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map(item => <BagItem item={item} />)}

        </div>
        <BagSummary />
      </div>
    </main>

  );
}
export default Bag; 