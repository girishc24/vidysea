import {Hero, Product, Journey, Services, Testimonials, Students, Aboutus, Media, Faq, Subscribe, Footer} from './sections'
import Nav from './components/Nav';
import KeyServices from './sections/KeyServices';

const App = () => {
  
  return (
    <>
      <main className="relative bg-[#FAFAFA]">
        <Nav /> 
        <section className="xl:padding-1 ">
          <Hero />
        </section>

        <section className="px-11 max-sm:px-0 ml-4">
            <Product/> 
        </section>

        <section className="px-8 ">
            <Journey/>
        </section>
        
        <section className=" pt-0 max-sm:pt-0">
            <Services/>
        </section>

        <section className="bg-pale-blue lg:px-20 py-4 rounded-2xl max-container-lg">
            <Students/>
        </section>

        <section className="px-[3.5rem] py-7 max-sm:p-0">
            <KeyServices/>
        </section>

        <section className="px-[3.5rem] pt-0 pb-0 max-sm:p-0">
            <Aboutus/>
        </section>

        <section className=" pt-0 pb-0 ">
            <Media/>
        </section>

        <section className="">
          <Testimonials/>
        </section>

        <section className="padding max-container-sm pt-0">
            <Faq/>
        </section>

        <section className="padding pt-0 max-container-sm max-sm:pt-0" >
            <Subscribe/>
        </section>

        <section className=" padding-x  pb-8 max-sm:p-0">
            <Footer/>
        </section>
      </main>
    </>
  )
}

export default App
