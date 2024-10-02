import img1 from '../assets/mentors/img1.jpg';
import img2 from '../assets/mentors/img2.jpeg';
import img3 from '../assets/mentors/img3.jpg';
import img4 from '../assets/mentors/img4.jpg';
import Carousel from './Carousel';

function Mentors() {
const images=[
  img1,img2,img3,img4
]
console.log(images);

  return (
    <div className="text-center mt-40 ">
        <h1 className="text-5xl">Our Mentors.</h1>
        <p className="text-lg my-5">Meet our talented team proud in delivering your brand's logo.</p>
        <Carousel images={images} space={10} slides={2}/>
    </div>
  )
}

export default Mentors