import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Smallcard from '../components/Smallcard';
import Card from '../components/Card';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({exploreData, CartData}) {
  return (
    <div>
      <Head>
        <title>landbnb</title>
        <link rel="icon" href="https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png" />
      </Head>

      {/* header */}
      <Header/>
      {/* Banner */}
      <Banner/>

      <main className="max-w-7xl mx-auto px-8 sm:px-16 scroll">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Explore Nearby
          </h2>
          {/* pull data from some surver "static rendering" */}
          <div className="grid grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          ">
            {exploreData?.map((item) =>(
              <Smallcard
                
                img={item.img}
                distance={item.distance}
                location={item.location} />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">
            Live anywhere
          </h2>
          {/* pull data from some surver "static rendering" */}
          <div className=" space-x-3 flex overflow-x-scroll overflow-y-visible py-10 pl-3 -ml-3
          ">
            {CartData?.map((item) =>(    
              <Card 
                img={item.img}
                title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="the Greatest out doors"
          discription="Wishlists curated by airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer/>
    
    </div>
  )
}


export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').
  then(
    (res) => res.json()
  );
  
  const CartData = await fetch('https://jsonkeeper.com/b/VHHT').
  then(
    (res) => res.json()
  );
  return{
    props: {
      exploreData,
      CartData
    }
  }

}