import React from "react";
import "../styles/Modal_style.css";

const Modal = () => {
  return (
    <div className="add_pin_modal">
      <div className="add_pin_container">
        <div className="side" id="left_side">
          <div className="section1">
          <div className="pin_mock_icon_container">
                    <img src='./images/more.png' alt="upper_right" className="pin_mock_icon" />
                </div>
          </div>
          <div className="section2">
            <label htmlFor="upload_img" id="upload_img_label">
              <div className="upload_img_container">
                <div id="dotted_border">
                <div className="pin_mock_icon_container">
                    <img src='./images/upload_img.png' alt="upload_img" className="pin_mock_icon" />
                </div>
                <div>Click to upload</div>
                <div>Recommendation: Use hight-quality .Jpg less than 20Mb</div>
                </div>
              </div>
              <input type="file" name="upload_img" id="upload_img" value="" />
            </label>
            <div className="modals_pin_img">
            <div className="pin_image">
          <img src="" alt="pin_image" />
        </div>

            </div>
          </div>
          <div className="section3">
            <div className="save_from_site">
              Save
            </div>
          </div>
        </div>
        <div className="side" id="right_side">
          <div className="section1">
            <div className="slect_size">
              <select defaultValue="Select" name="pin_size" id="pin_size">
                  <option value="">Select</option>
                  <option value="small">Nhỏ</option>
                  <option value="medium">Vừa</option>
                  <option value="large">Lớn</option>
              </select>
              <div className="save_pin">Lưu</div>
            </div>
          </div>
          <div className="section2">
            <input placeholder="Thêm tiêu đề" type="text" id="pin_title" className="new_pin_input" />
            <input placeholder="Thêm mô tả" type="text" id="pin_des" className="new_pin_input" />
            <input placeholder="Thêm đường dẫn" type="text" id="pin_link" className="new_pin_input" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
