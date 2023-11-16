import { arrowRight } from "../assets/icons"
import Button from "../components/Button"

const Intro = () => {
  return (
    <section className="w-full flex flex-col justify-center gap-10 max-container">
         <div className='lg:hidden text-center text-black'>
            <h1 className='font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>The <span className="relative z-10 text-coral-red">Future</span> of <div className="max-sm:text-[82px] text-[102px] font-extrabold"><span className="text-coral-red">Fur</span>ni<span className="text-coral-red">t</span>ur<span className="text-coral-red">e</span></div> is HERE!</h1>
            <p className="py-6 mx-10">Discover a world of exquisite furniture that transforms your space into a haven of sophistication and warmth.</p>
            <div className="flex justify-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
                <Button 
                    label='Shop Now'
                    iconURL={arrowRight}
                />
            </div>
         </div>
    </section>
  )
}

export default Intro