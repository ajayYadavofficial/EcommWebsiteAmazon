import React from 'react'
import './Home.css'
import Product from './Product.js'

function Home() {
  return (
    <div className='Home'>
        
        <div className='home_container'>
            <img className='home_image' src='https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg' alt='' />

            <div className='home_row'>

            <Product id={10100} title='The Heroes we Aspire: Indian Sports Edition' price={1499} image='https://m.media-amazon.com/images/P/B0BBXX9DMK.01._SCLZZZZZZZ_SX500_.jpg' rating= {4}/>
            <Product 
            id={10101}
            title='Original HP 67XL Black High-yield Ink Cartridge | Works with HP DeskJet | Eligible for Instant Ink | 3YM57AN'
                price={490}
                image = 'https://m.media-amazon.com/images/I/71Llge105IL._AC_UL480_QL65_.jpg'
                rating={3}
            />
            </div>

            <div className='home_row'>

            <Product 
                id={10102}
                rating={4}
                image={'https://m.media-amazon.com/images/I/71gJuqH4LeL._SL1500_.jpg'}
                price={2399}
                title={'Amazon Brand-HLFLYG 4 Pack Tongue Scraper with Two Different Style, Professional Eliminate Bad Breath, Stainless Steel Tongue Scrapers| Rose Gold'}
            />
            <Product 
                id={10103}
                rating={5}
                price={257992}
                image={'https://m.media-amazon.com/images/I/61aUBxqc5PL._AC_SL1500_.jpg'}
                title={'2021 Apple MacBook Pro (16-inch, Apple M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Space Gray'}
            />
            <Product 
                id={10104}
                title = {'Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm Exercisers, Gym Equipment for Work from Home Fitness, Black JX-7301'}
                price = {25287}
                image ={'https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_SL1500_.jpg'}
                rating ={3}
            />

            </div>

            <div className='home_row'>
            <Product 

            id={10105}
            image={'https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SL1500_.jpg'}
            title= {'SAMSUNG 49" Odyssey Neo G9 G95NA Gaming Monitor, 4K UHD Mini LED Display, Curved Screen, 240Hz, 1ms, G-Sync and FreeSync Premium Pro, LS49AG952NNXZA, White & Black'}
            price={1359820}
            rating={5}
            />

            </div>
        
        
        </div>

    </div>
  )
}

export default Home