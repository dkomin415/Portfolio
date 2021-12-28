import './intro.css'
import ninjas from "../images/ninjas.jpg"

const Intro = () => {
  
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Dominik Huerta</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Skateboarder</div>
              <div className="i-title-item">Artist</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">Photographer</div>
            </div>
          </div>
          <div className="i-description">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, and web services for online stores.
          </div>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={ninjas} alt="" className="i-img" />
      </div>
    </div> 
  )
}

export default Intro