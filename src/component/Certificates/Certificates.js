import { nanoid } from "nanoid";
import CertificatesDetails from "./AllCertificates";
import './certificate.css';

const Certificates=()=>{
    return(
       <div>
      <div className="certificates">
        {CertificatesDetails.map((data) => {
          return (
            <div key={nanoid()} className="certificate-box">
              <div className="certificate-title-wrapper">
                <div className="certificate-icon">{data.icon}</div>
                <h3 className="certificate-heading">{data.heading}</h3>
              </div>
              {data.certificates.map((certificate) => {
                return (
                  <div key={nanoid()} className="certificate">
                    <h4 style={{color:"white",fontSize:"1rem"}}>{certificate.title}</h4>
                    <p>{certificate.source}</p>
                    <a href={certificate.img} target="_blank" rel="noreferrer">
                      <img src={certificate.img} alt="" />
                    </a>
                  </div> 
                );
              })}
            </div>
          );
        })}
      </div>
       </div>
    );
}
export default Certificates;