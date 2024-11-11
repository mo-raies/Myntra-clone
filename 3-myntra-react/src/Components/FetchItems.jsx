
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsAction } from "../Store/ItemSlice";
import { fetchStatusAction } from "../Store/fetchStatusSlice";


const FetchItems = () => {
  const fetchStatus = useSelector(Store => Store.fetchStatus);
  const dispatch = useDispatch();


  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.markfetchingStarted());
    fetch('http://localhost:8080/items')
      .then(res => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markfetchDone());
        dispatch(fetchStatusAction.markfetchingFinished());
        dispatch(ItemsAction.addinitialItems(items[0]));
        // console.log('items fetced', items);

      });
    return () => {
      // controller.abort();
    };
  }, [fetchStatus]);




  return <></>

}
export default FetchItems;



