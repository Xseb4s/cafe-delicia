"use client"
import { Toggle } from "@/components/toggle/page";
import Start from "./home/start";
import We from "./home/we";
import Services from "./home/services";
import Story from "./home/story";
import Location from "./home/location";
import { Testimonial } from "./home/testimonial";

const Home = () => {
  return (
    <>
      <Toggle/>
      <Start/>
      <We/>
      <Services/>
      <Testimonial/>
      <Story/>
      <Location/>
    </>
  )
}

export default Home