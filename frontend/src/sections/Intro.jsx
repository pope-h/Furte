import { arrowRight } from "../assets/icons"
import Button from "../components/Button"

const Intro = () => {
  return (
    <section className="w-full flex flex-col justify-center gap-10 max-container">
         <div className='lg:hidden relative flex flex-col justify-center items-start w-full max-xl:padding-x pt-4'>
            <h1 className='font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] max-xs:text-[52px] max-xs:leading-[62px] font-bold'>The <span className="relative z-10 pr-10">Future</span><br /><div className="max-sm:text-[82px] max-xs:text-[62px] text-[102px] block"><span className="text-coral-red">Fur</span>ni<span className="text-coral-red">t</span>ur<span className="text-coral-red">e</span></div> is HERE!</h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-8 sm:max-w-sm">Discover a world of exquisite furniture that transforms your space into a haven of sophistication and warmth.</p>
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