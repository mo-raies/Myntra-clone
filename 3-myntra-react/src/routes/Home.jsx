import HomeItem from "../Components/HomeItem"
import { useSelector } from "react-redux"
const Home = () => {

  const items = useSelector((store) => store.items);
  // console.log('got items', items);


  return (
    <main>
      <div className="items-container">
        {items.map((items => <HomeItem key={items.id} item={items} />))}

      </div>
    </main>
  )

}
export default Home;