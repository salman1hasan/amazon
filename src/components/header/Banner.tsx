import { Carousel } from "react-responsive-carousel";


const Banner = () => {
  return (
    <div className="relative">
      <Carousel>
        <div>
          <img src="assets/1.jpeg"/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg"/>
           <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg"/>
           <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;