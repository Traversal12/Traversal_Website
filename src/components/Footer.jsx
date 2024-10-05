import img from '../assets/traversal_logo.png'
import geu from '../assets/geu_logo.png'

function Footer() {
  return (
    <div className='flex justify-between mt-24 p-10 pb-32 z-10 relative  '>
        <div className='w-24'>
            <img src={img} alt="" />
        </div>
        <div className=' pr-28 font-semibold'>
            <ul>
                <li>WhatsApp</li>
                <li>Instagram</li>
                <li>Discord</li>
                <li>Linkedin</li>
            </ul>
        </div>
        <div className='w-60'>
            <img src={geu} alt="" />
        </div>
    </div>
  )
}

export default Footer