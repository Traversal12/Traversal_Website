import Carousel from "./Carousel"
import img1 from '../assets/team/image1.jpg';
import img2 from '../assets/team/image2.jpeg';
import img3 from '../assets/team/image3.jpg';
import img4 from '../assets/team/image4.jpeg';

function Team({setCursorVisible}) {
    const images=[img1,img2,img3,img4]
  return (
    <div className="text-center mt-40 h-[700px] ">
    <h1 className="text-5xl">Our Team.</h1>
    <p className="text-lg my-5">Meet our talented team proud in delivering your brand's logo.</p>
<Carousel images={images} slides={3} space={25} rounded={"rounded-3xl"} effect={" transition-transform duration-300 transform grayscale hover:grayscale-0 hover:scale-110"}  setCursorVisible={setCursorVisible}/>
</div>
  )
}

export default Team