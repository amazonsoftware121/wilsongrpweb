import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const MainBanner = () => {
  return (
    <section className='mainBanner'
        style={{
        backgroundImage: 'url(../assets/img/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
>
<div className="container">
<div className="bannerContent">
    
        <div className="bannerContentInner">
        <h4 className="bannerSubHeading">Certified FedRAMP and StateRAMP 3PAO</h4>
            <h2 className="bannerHeading">FedRAMP and StateRAMP Compliance Consulting</h2>
            <p className="bannerDescription">Achieve or maintain your FedRAMP & StateRAMP authorization with our Advisory and Assessment Services. </p>
            <div className="bannerButtons">
                <Link to="/" className="btn btn-primary">Read More <span><FaArrowRight /></span></Link>
                <Link to="/" className="btn btn-secondary" >Services <span><FaArrowRight /></span></Link>
            </div>
        </div>
    </div>
</div>
    </section>
  )
}

export default MainBanner