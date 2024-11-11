import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FetchItems from "../Components/FetchItems";
import { useSelector } from "react-redux";
import LoadingSpiner from "../Components/LoadingSpiner";




function App() {

  const fetchStatus = useSelector(Store => Store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpiner /> : <Outlet />}
      <Footer />
    </>
  )
}

export default App
