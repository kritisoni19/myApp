import { useEffect,useState } from 'react';
import {SWIGGY_URL,SEE_ALL_RES} from '../utils/constants';
import { Link } from 'react-router-dom';
// import Shimmer from "./components/Shimmer";

function SeeAllRestaurants(){
    const [resdata,setResData] = useState([]);
    useEffect(()=>{
        fetchDataRes()
    },[])
    const fetchDataRes = async()=>{
        const fetchDataResShow = await fetch(SWIGGY_URL);
        const jsonDataShow = await fetchDataResShow.json();
        setResData(jsonDataShow?.data?.cards[2]?.data?.data?.cards);
        // console.log(jsonDataShow);
    }
   
    return resdata.length ===0 ? (<h2>Loading....</h2>): (
        <>
          <h2 style={{textAlign:'center'}}>See All Restaurants</h2>
          <div className="seeAllres_container">
            {
                
                    resdata.map((resItems)=>{
                        // const {costForTwoString,cloudinaryImageId,id} = resItems.data;
                        // 
                        return (
                            <Link to ={'/restaurantmenu/:resid'} key={resItems.data.id}>
                                <div className="seeAll_res_cards" >
                                    <img src={SEE_ALL_RES + resItems.data.cloudinaryImageId} alt="card"/>
                                    <h4>{resItems.data.name}</h4>
                                    <p>{resItems.data.cuisines.join(', ')}</p>
                                    <div className="dish_details">
                                        <span>* {resItems.data.avgRating}</span>
                                        <p>{resItems.data.slaString}</p>
                                        <p>{resItems.data.costForTwoString}</p>
                                    </div>
                                </div>
                            </Link>
                          
                        )
                    })
                }
      
           
          </div>
        </>
    )
}
export default SeeAllRestaurants;