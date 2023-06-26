import { useEffect,useState } from 'react';
import {SWIGGY_URL,CAROSAL_IMAGES} from '../utils/constants';



function CarousalData(){
    const [carsldata, setCarslData] = useState([]);
    const fetchData = async()=>{
        const fetchDataShow = await fetch(SWIGGY_URL);
        const jsonData = await fetchDataShow.json();
        // console.log(jsonData.data.cards[0].data.data.cards);
        setCarslData(jsonData?.data?.cards[0]?.data?.data?.cards);
    }
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <>
            <div className="carousal_container">
                {
                    carsldata.map((item)=>{
                        return (
                            <div className="carousal_card" key={item.data.bannerId}>
                                <img src={CAROSAL_IMAGES + item.data.creativeId} alt="carolImg" />
                               </div>
                        )
                    })
                }
               
            </div>
        </>
    )
}
export default CarousalData;
