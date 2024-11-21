import img from '../../assets/hillx.jpg'
import { TbTargetArrow } from "react-icons/tb";
import { GiDecapitation } from "react-icons/gi";
import { BiShoppingBag } from "react-icons/bi";
import { MdFamilyRestroom } from "react-icons/md";
import { GiMountainClimbing } from "react-icons/gi";
import { GiMountains } from "react-icons/gi";
function AboutServices() {
  return (
    <>
    <div className=' my-10  text-center'>
 <span className=' font-Gochi text-2xl  '>Value before business </span>
 <h1 className='text-4xl font-bold'>We Offer the best </h1>
</div>
    <div className='lg:flex justify-center items-center gap-4'>
   
    <div className='lg:w-[50%] p-3'>
        <img className='w-full
         mx-auto shadow-lg rounded-md ' src={img} alt='hillx' />

    </div>
        
        <div className= 'text-start lg:w-[50%] px-4 pt-4 grid grid-cols-1 md:grid-cols-2  gap-4'>

            <div className='flex hover:shadow-lg transition rounded-sm  p-5 border justify-center items-center gap-5'>
                <div><GiMountains className='text-4xl'/></div>
                <div>
                    <h1 className='font-bold text-xl text-blue-600'>Adventurous Trails</h1>
                    <p className='font-light py-2 '>
                    Exploring nature's wonders, one trail at a time.</p>
                </div>
            </div>
            <div className='flex hover:shadow-lg transition rounded-sm p-5 border justify-center items-center gap-5'>
                <div><GiMountainClimbing className='text-4xl'/></div>
                <div>
                    <h1 className='font-bold text-xl text-blue-600'>Trained Guides</h1>
                    <p className='font-light py-2'>Expert guides ensuring safe and enriching adventures.</p>
                </div>
            </div>

            <div className='flex hover:shadow-lg transition rounded-sm p-5 border justify-center items-center gap-5'>
                <div><MdFamilyRestroom className='text-4xl'/></div>
                <div>
                    <h1 className='font-bold text-xl text-blue-600'>Family Trips</h1>
                    <p className='font-light py-2'>Creating unforgettable memories with loved ones on every journey.</p>
                </div>
            </div>

            <div className='flex hover:shadow-lg transition rounded-sm p-5 border justify-center items-center gap-5'>
                <div><BiShoppingBag className='text-4xl'/></div>
                <div>
                    <h1 className='font-bold text-xl text-blue-600'>Custom Packages</h1>
                    <p className='font-light py-2'>Tailored adventures designed to meet your unique needs and preferences.</p>
                </div>
            </div>

            <div className='flex hover:shadow-lg transition rounded-sm p-5 border justify-center items-center gap-5'>
                <div><TbTargetArrow className='text-4xl'/></div>
                <div>
                    <h1 className='font-bold text-xl text-blue-600'>Various Adventures</h1>
                    <p className='font-light py-2'>Diverse experiences for every thrill-seeker, from mountain treks to river rafting.</p>
                </div>
            </div>
            <div className='flex hover:shadow-lg transition rounded-sm p-5 border justify-center items-center gap-5'>
                <div><GiDecapitation className='text-4xl'/></div>
                <div>
                    <h1 className='font-bold text-xl text-blue-600'>Complete Guide</h1>
                    <p className='font-light py-2'>Comprehensive resources and expert advice for every adventure.</p>
                </div>
            </div>
            
            
        </div>
    </div>
    
    
    </>
  )
}

export default AboutServices