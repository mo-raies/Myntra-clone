import { useDispatch, useSelector } from "react-redux";
import { bagSliceAction } from "../Store/bagSlice";
import { MdAddCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;



  const handleAddToBag = () => {
    dispatch(bagSliceAction.addTobag(item.id))
  }
  const handleRemove = () => {
    dispatch(bagSliceAction.removeFromeBag(item.id))
  }

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">${item.company}</div>
      <div className="item-name">${item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (<button type="button"
        className="btn btn-danger remove"
        onClick={handleRemove} >
        <MdDelete /> Remove</button>
      ) : (
        <button type="button"
          className="btn btn-success add"
          onClick={handleAddToBag}>
          <MdAddCircleOutline />
          Add to bag</button>
      )}
    </div>
  )
}
export default HomeItem;



