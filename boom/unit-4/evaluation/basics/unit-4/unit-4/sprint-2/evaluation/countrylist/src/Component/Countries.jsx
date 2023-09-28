import { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

const getdata = async (current) => {
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${current}&limit=10`)
    .then((res) => res.json());
}
function Countries() {

  const [loading, setLoading] = useState(true);
  const [api, setApi] = useState([]);
  const [totalPages, setTotalPages] = useState(null)
  const [current, setCurrent] = useState(1)

  const fetchdata = async () => {
    try {
      let response = await getdata(current)
      setLoading(false)
      setApi(response.data);
      setTotalPages(response.totalPages)
    } catch (err) {
      setLoading(false)
    }
  }
  const handleChange = (page) => {
    setCurrent(current + page)
  }
  useEffect(() => {
    fetchdata();
    setLoading(true)
  },[current])




  if (loading)
    return <LoadingIndicator />;
  else
    return (
      <div>
        <h1 data-testid="countries-header">Countries List</h1>
        <div data-testid="countries-container">
          {
            api.map((el) => {
              return <CountriesCard key={el.id} {...el} />
            })
          }

        </div>
        <div>
          <Pagination current={current} total={totalPages}
            onChange={handleChange}
          />
        </div>
      </div>
    );
}

export default Countries;
