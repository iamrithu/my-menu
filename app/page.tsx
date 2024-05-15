import Indredients from "@/components/landingPage/Incredient";
import DrinkList from "@/components/landingPage/drinkList";
import FoodList from "@/components/landingPage/foodList";
import Logo from "@/components/landingPage/logo";
import MenuList from "@/components/landingPage/menuList";
import Timing from "@/components/landingPage/timing";
import TopBar from "@/components/landingPage/topBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { FaBowlFood } from "react-icons/fa6";
import { GiThermometerScale } from "react-icons/gi";
import { MdAccessAlarms } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="w-full h-full overflow-y-scroll scroll-smooth overflow-x-hidden relative px-4 md:px-40">
      <section id="menu" className="w-full min-h-full ">
        <TopBar />
        <div className="w-full h-auto md:h-[80vh] flex flex-col md:flex-row relative">
          <div className="flex-1 h-full flex flex-col justify-center items-center  ">
            <div className="w-full ml-auto mr-auto">
              <div className="w-[200px] h-[40px] bg-black  flex justify-start items-center flex-row tex-white space-x-4">
                <p className="bg-white p-1 h-[37px] m-2"></p>
                <p className="text-white">Our Menu</p>
                <BsMenuButtonWideFill
                  className="mr-3 text-white"
                  scale={10}
                  mt-1
                />
              </div>
              <p className="mt-2 italic tracking-widest text-sm md:font-bold text-neutral-600">
                Welcome to our restaurant! Our menu features a diverse selection
                of dishes to tantalize your taste buds. Start your meal with one
                of our tempting appetizers, ranging from refreshing salads to
                crispy calamari. For the main course, indulge in our chef's
                specialties, including succulent steaks, fresh seafood, hearty
                pasta dishes, and flavorful vegetarian options. Enhance your
                meal with our selection of side dishes, from classic mashed
                potatoes to seasonal roasted vegetables. Save room for dessert,
                with our delectable cakes, pies, and ice cream treats. Pair your
                meal with a beverage from our extensive list, featuring fine
                wines, craft beers, and specialty cocktails. We also offer a
                dedicated kids menu and provide allergen information for your
                convenience. Be sure to ask about our daily specials for unique
                culinary experiences. Bon appétit!
              </p>
            </div>
          </div>
          <div className="flex-1 h-full flex justify-center items-center ">
            <Image
              alt="MENU"
              src={"/menu.png"}
              width={2000}
              height={2000}
              className=" drop-shadow-md w-[300px] sm:w-[500px] md:w-[700px]"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <MenuList />
      </section>
      <section id="food" className="w-full min-h-full  ">
        <div className="flex-1 h-full flex flex-col justify-center items-center mt-8 ">
          <div className="w-full h-auto md:h-[80vh] flex flex-col md:flex-row relative ">
            <div className="flex-1 h-full flex flex-col justify-center items-center  ">
              <div className="w-full ml-auto mr-auto">
                <div className="w-[200px] h-[40px] bg-black  flex justify-start items-center flex-row tex-white space-x-4">
                  <p className="bg-white p-1 h-[37px] m-2"></p>
                  <p className="text-white">Our Foods</p>
                  <FaBowlFood className="mr-3 text-white" scale={10} mt-1 />
                </div>
                <p className="mt-2 italic tracking-widest text-sm md:font-bold text-neutral-600">
                  Food is a multifaceted phenomenon that encompasses joy,
                  culture, community, creativity, emotion, nourishment, and
                  sustainability. It is a fundamental aspect of the human
                  experience, enriching our lives in countless ways and bringing
                  people together in shared appreciation and celebration. Let's
                  savor every bite and embrace the boundless pleasures of the
                  culinary world. Cheers to the joy of food! 🍽️🌍
                </p>
              </div>
            </div>
            <div className="flex-1 h-full flex justify-center items-center mt-4 md:mt-1 ">
              <Image
                alt="FOOD"
                src={"/bg2.png"}
                width={2000}
                height={2000}
                className=" drop-shadow-md w-[300px] sm:w-[500px] md:w-[700px]"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <FoodList />
      </section>
      <section id="beverages" className="w-full min-h-full">
        <div className="flex-1 h-full flex flex-col justify-center items-center mt-8 ">
          <div className="w-full h-auto md:h-[80vh] flex flex-col md:flex-row relative ">
            <div className="flex-1 h-full flex flex-col justify-center items-center  ">
              <div className="w-full ml-auto mr-auto">
                <div className="w-[200px] h-[40px] bg-black  flex justify-start items-center flex-row tex-white space-x-4">
                  <p className="bg-white p-1 h-[37px] m-2"></p>
                  <p className="text-white">Our Breverage</p>
                  <RiDrinks2Fill className="mr-3 text-white" scale={10} mt-1 />
                </div>
                <p className="mt-2 italic tracking-widest text-sm md:font-bold text-neutral-600">
                  Ah, the welcome drink—a delightful gesture that sets the tone
                  for a memorable experience! A welcome drink is more than just
                  a beverage; it's a warm greeting, a gesture of hospitality,
                  and a taste of what's to come. Whether it's a refreshing glass
                  of sparkling water garnished with a twist of lemon, a fruity
                  mocktail bursting with tropical flavors, or a sophisticated
                  flute of champagne, the welcome drink is an invitation to
                  relax, unwind, and embark on a journey of culinary delights.
                  It's the first impression that leaves a lasting impact,
                  signaling to guests that they are valued and cared for from
                  the moment they arrive. So here's to the welcome drink—a small
                  but meaningful touch that adds a touch of elegance and charm
                  to any occasion. Cheers! 🥂
                </p>
              </div>
            </div>
            <div className="flex-1 h-full flex justify-center items-center mt-4 md:mt-1 ">
              <Image
                alt="FOOD"
                src={"/drinks.png"}
                width={2000}
                height={2000}
                className=" drop-shadow-md w-[300px] sm:w-[500px] md:w-[700px]"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <DrinkList />
      </section>
      <section id="ingredients" className="w-full min-h-full mt-10">
        <div className="flex-1 h-full flex flex-col justify-center items-center mt-8 ">
          <div className="w-full h-auto md:h-[80vh] flex flex-col md:flex-row relative ">
            <div className="flex-1 h-full flex flex-col justify-center items-center  ">
              <div className="w-full ml-auto mr-auto">
                <div className="w-[200px] h-[40px] bg-black  flex justify-start items-center flex-row tex-white space-x-4 my-28">
                  <p className="bg-white p-1 h-[37px] m-2"></p>
                  <p className="text-white">Our Ingredients</p>
                  <GiThermometerScale
                    className="mr-3 text-white"
                    scale={10}
                    mt-1
                  />
                </div>
                <p className="mt-2 italic tracking-widest text-sm md:font-bold text-neutral-600">
                  Ingredients are the building blocks of culinary creations, the
                  raw materials from which chefs and home cooks alike craft
                  delicious dishes. They come in myriad forms, ranging from
                  fresh produce and proteins to pantry staples and seasonings.
                  Each ingredient contributes its own unique flavor, texture,
                  and nutritional value, adding depth and complexity to recipes.
                  From vibrant fruits and vegetables bursting with vitamins and
                  antioxidants to savory meats and cheeses rich in protein and
                  umami, ingredients offer endless possibilities for culinary
                  creativity. Whether sourced from local markets, specialty
                  grocers, or home gardens, ingredients serve as the foundation
                  upon which culinary masterpieces are built.
                </p>
              </div>
            </div>
            <div className="flex-1 h-full flex justify-center items-center mt-4 md:mt-1 ">
              <Image
                alt="FOOD"
                src={"/inc.png"}
                width={2000}
                height={2000}
                className=" drop-shadow-md w-[300px] sm:w-[500px] md:w-[700px]"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        <Indredients />
        <div className="flex-1 h-full flex flex-col justify-center items-center mt-8 ">
          <div className="w-full h-auto md:h-[80vh] flex flex-col md:flex-row relative ">
            <div className="flex-1 h-full flex flex-col justify-center items-center  ">
              <div className="w-full ml-auto mr-auto">
                <div className="w-[200px] h-[40px] bg-black  flex justify-start items-center flex-row tex-white space-x-4 my-28">
                  <p className="bg-white p-1 h-[37px] m-2"></p>
                  <p className="text-white">Our Timings</p>
                  <GiThermometerScale
                    className="mr-3 text-white"
                    scale={10}
                    mt-1
                  />
                </div>
                <p className="mt-2 italic tracking-widest text-sm md:font-bold text-neutral-600">
                  The timing of meals can impact digestion, energy levels, and
                  nutrient absorption. Eating meals at regular intervals helps
                  regulate blood sugar levels and prevents energy crashes. For
                  example, having a balanced breakfast shortly after waking up
                  can kickstart metabolism and provide fuel for the day ahead.
                </p>
              </div>
            </div>
            <div className="flex-1 h-full flex justify-center items-center mt-4 md:mt-1 ">
              <Image
                alt="FOOD"
                src={"/time.png"}
                width={2000}
                height={2000}
                className=" w-[300px] sm:w-[500px] md:w-[700px]"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
        <Timing />
      </section>
      <section className="w-full h-[100px] bg-black text-white -px-28"></section>
      {/* <div className="fixed bottom-4 right-4 bg-white rounded-3xl">
        <Logo />
      </div> */}
    </div>
  );
}
