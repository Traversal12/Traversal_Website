import Carousel from "./Carousel"
import img1 from '../assets/team/image1.jpg';
import img2 from '../assets/team/image2.jpeg';
import img3 from '../assets/team/image3.jpg';
import img4 from '../assets/team/image4.jpeg';

function Team() {
    const images=[img1,img2,img3,img4]
  return (
    <div className="text-center mt-40 ">
    <h1 className="text-5xl">Our Team.</h1>
    <p className="text-lg my-5">Meet our talented team proud in delivering your brand's logo.</p>
<Carousel images={images} slides={3} space={20} rounded={"rounded-lg"}/>
</div>
  )
}

export default Team