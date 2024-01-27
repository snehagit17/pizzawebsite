import Hero from "./components/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";
import Menu_item from "./components/Menu/Menu_item";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-600 max-w-2xl mx-auto mt-4 font-semibold">
          <p>
            At St Pizza, we're passionate about crafting exceptional pizzas that
            bring friends and families together. From our humble beginnings in
            kolkata to our current multiple locations we've stayed true to our
            roots. Our secret? It's all in the dough—made fresh daily and topped
            with carefully selected, locally sourced ingredients.Quality isn't
            just a word for us—it's a way of life. We believe in using only the
            freshest produce, premium meats, and artisanal cheeses to create
            pizzas that delight the senses. Whether you're a fan of classic
            Margherita or crave bold, innovative flavors, our menu has something
            for every palate.Beyond serving mouthwatering pizzas, we have other
            things to get your hands on .Our team isn't just a staff; we're a
            family united by a love for great food and exceptional service. From
            our chefs who masterfully create each pizza to our friendly servers
            who ensure your dining experience is top-notch, every member of our
            team shares the same passion for excellence.Whether it's a casual
            family dinner, a celebration with friends, or a quick lunch, we
            invite you to experience the taste of tradition and quality at St
            Pizza. Join us, and let's share the joy of great pizza together!
            Thank you for being a part of our story.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={"Dont Hesitate"} mainHeader={"Contact us"} />
        <div className="mt-8">
          <a
            className="text-2xl underline text-gray-600"
            href="tel:+917439697239"
          >
            +91 743 969 7239
          </a>
        </div>
      </section>
    </>
  );
}
