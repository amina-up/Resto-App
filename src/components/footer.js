import React from "react";
import theimg from "./sea-food-logo.png";
class Footer extends React.Component {
  render() {
    return (
      <div>
      <div className="allfooter">
        <div className="leftfooter">
          <div className="logofooter">
          <img src={theimg} className="imgfooter" />
          </div>
          <div className="parafooter">
              <p>STAY IN CONTACT WITH US AND SHARE OUR PASSION.</p>
          </div>
          <div className="contact">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-pinterest-p"></i>
          <i className="fas fa-map-marker-alt"></i>
          </div>
          </div>
          <div className="rightfooter">
            <div className="up">
            <h3 className="hours">HOURS OF OPERATION</h3>
            <p><strong>LUNCH : </strong>11 A.M. to 3 P.M., Mon. - Sat.</p>
            <p><strong>DINNER : </strong>5 P.M. to 9 P.M., Thu. - Sat.</p>
            </div>
            <div className="down">
              
              <p className="pfooter">Eat in or take out. We accept credit cards, personal checks,<br/> and cold-hard cash.</p>
            </div>
          </div>
      </div>
    </div>
    );
  }
}
export default Footer;
