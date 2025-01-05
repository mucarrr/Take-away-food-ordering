import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import { getRestaurants } from '../../redux/actions/restActions.js';
import Card from "./Card.jsx";

const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );

  const dispatch = useDispatch()
  const retry =()=> dispatch(getRestaurants())
  
  return (
    <div className="container">
      <h1 className="font-semibold text-xl md:text-2xl mb-5">
        Nearby Restaurants
      </h1>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : error ? (
        <div>
          <Error info={error} retry={retry}/>
        </div>
      ) : (
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {restaurants.map((item) => (
            <div key={item.id}>
              <Card key={item.id} restaurant={item}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
