import React,{useState,useEffect} from "react";

const HeaderToggle = props => {
  const [isChecked,setChecked] = useState(true)

  useEffect(()=>{
    const s = document.getElementById("switch");
    if(isChecked){
      s.className="switch__btn";
    }else{
      s.className="switch__btn-off";
    }
  })

  return (
    <div className="header__toggle">
      <label className="header__toggle-btn">
        <div className="switch__base">
          <div className="switch__btn" id="switch"></div>
        </div>
        <input
          name="toggle"
          type="checkbox"
          checked={isChecked}
          onChange={()=>{setChecked(!isChecked)}}
          className="hidden"
        />
      </label>
    </div>
  );
}

export default HeaderToggle;