import React, { Suspense } from 'react'
import Carorseel from './Carorseel'
import ThreeShoe from './ThreeShoe'
const FeaturedItems = React.lazy(()=>import("./FeaturedItems"))
import Saving50 from './Saving50'
import Homedelivery from './Homedelivery'
import BestSeller from './BestSeller'
import ThreeShoe2 from './ThreeShoe2'
import Feedback from './Feedback'

const Home = () => {
  return (
    <div>
      <Carorseel/>
      <ThreeShoe/>
      <Suspense fallback={<div>Loading...</div>}><FeaturedItems/></Suspense>
      <Saving50/>
      <Homedelivery/>
      <BestSeller/>
      <ThreeShoe2/>
      <Feedback/>
    </div>
  )
}

export default Home
