import React, { useState } from "react";
import "../styles/Pin_style.css";

const Pin = () => {
    const [image, setImage] = useState();
    const upload_image =(e, setImage)=>{
        if(e.target.files && e.target.files[0]) {
            if(/image\/*/.test(e.target.files[0].type)){
                const reader = new FileReader();

                reader.onload = function () {
                    setImage(reader.result);
                }
                reader.readAsDataURL(e.target.files[0]);
            }
        }
    }
  return (
    <div>
      <input onChange={e=> upload_image(e, setImage)} type="file" name="picture" id="pictures" value={""} />
      <div className="card">
        <div className="pin_title"></div>
        <div className="pin_modal">
          <div className="modal_head">
            <div className="save_card">Save</div>
          </div>
          <div className="modal_footer">
            <div className="destination">
                <div className="pin_mock_icon_container">
                    <img src='./images/upper_right_arrow.png' alt="upper_right" className="pin_mock_icon" />
                </div>
                <span>Aha</span>
                
            </div>
            <div className="pin_mock_icon_container">
                    <img src='./images/dowload.png' alt="dowload" className="pin_mock_icon" />
                </div>
                <div className="pin_mock_icon_container">
                    <img src='./images/more.png' alt="more" className="pin_mock_icon" />
                </div>
          </div>
        </div>
        <div className="pin_image">
          <img src={image} alt="pin_image" />
        </div>
      </div>
    </div>
  );
};

export default Pin;
