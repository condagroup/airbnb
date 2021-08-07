import React from 'react'
import Head from 'next/head'
import { useRouter } from "next/dist/client/router";
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';


function search({SearchResult}) {

    const router = useRouter()
    const {Location, Guest, StartDate, EndDate} = router.query;

    // const formatedStartDate = format(new Date(parseISO(StartDate)), "dd MMMM yy")
    // const formatedEndDate = format(new Date(EndDate), "dd MMMM yy")

  


    return (
        <div className="h-full">
            <Head>
                <title>Search Result</title>
                {/* <link rel="icon" href="https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png" /> */}
            </Head>
            <Header/>
            {/* Main */}
            <div className="flex">
                {/* Results */}
                <section className="flex-1
                p-7
                md:p-10
                lg:p-10
                xl:p-16
                2xl:p-20
                ">
                    <p className="text-sm">300+ stays · {StartDate} - {EndDate} · {Guest} guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {Location}
                    </h1>
                    <div className="hidden space-x-2 md:flex mb-5">
                        
                        <h1 className="border-2 px-6 py-2 rounded-full hover:scale-105 hover:shadow-md duration-200 cursor-pointer active:scale-95">Instant Book</h1>
                        <h1 className="border-2 px-6 py-2 rounded-full hover:scale-105 hover:shadow-md duration-200 cursor-pointer active:scale-95">Price</h1>
                        <h1 className="border-2 px-6 py-2 rounded-full hover:scale-105 hover:shadow-md duration-200 cursor-pointer active:scale-95">Type of place</h1>
                        <h1 className="border-2 px-6 py-2 rounded-full hover:scale-105 hover:shadow-md duration-200 cursor-pointer active:scale-95">Cancellation flexibility</h1>
                        <h1 className="border-2 px-6 py-2 rounded-full hover:scale-105 hover:shadow-md duration-200 cursor-pointer active:scale-95">More filters</h1>
                    </div>

                    {SearchResult.map(({img, location, title, description, star, price, total}) => (
                        <InfoCard
                        img = {img}
                        location = {location}
                        title = {title}
                        description = {description}
                        star = {star}
                        price = {price}
                        total = {total}
                        />
                    ))}


                </section>
                {/* <section className="min-w-[600px]">
                    <Map/>
                </section> */}
            </div>
            <Footer/>
        </div>
    )
}

export default search

export async function getServerSideProps() {
    const SearchResult = await fetch('https://jsonkeeper.com/b/5NPS')
    .then(
      (res) => res.json()
    );
    
    return{
      props: {
        SearchResult
      }
    }
  
  }