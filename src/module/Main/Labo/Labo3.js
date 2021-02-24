import React,{useState, useEffect} from 'react';

const Labo3 = () => {
    const [point, setPoint] = useState([0,0]);
    const box7_method = (e) =>{
        setPoint([e.clientX, e.clientY]);
    }


    return (
        <div className="labo__contents">
            <div className="labo__content">
                <p className="labo__sub-title">event test<br />{`${point[0]}:${point[1]}`}</p>
                <div className="box_wrapper">
                    <div id="box7" className="box7" onMouseMove={(e)=>{box7_method(e)}}></div>
                </div>
            </div>
        </div>
    );
}

export default Labo3