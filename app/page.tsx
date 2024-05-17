"use client";
import Indredients from "@/components/landingPage/Incredient";
import DrinkList from "@/components/landingPage/drinkList";
import FoodList from "@/components/landingPage/foodList";
import Logo from "@/components/landingPage/logo";
import MenuList from "@/components/landingPage/menuList";
import Timing from "@/components/landingPage/timing";
import TopBar from "@/components/landingPage/topBar";
import FormContainer from "@/components/menu/form";
import FormContainer2 from "@/components/food/form";
import FormContainer3 from "@/components/drink/form";
import FormContainer4 from "@/components/incredient/form";
import FormContainer5 from "@/components/timing/form";

import { Button } from "@/components/ui/button";
import { getDrink } from "@/data/drink";
import { getAllFood } from "@/data/food";
import { getAllIncredient } from "@/data/incredient";
import { getAllMenu } from "@/data/menu";
import { getAllTiming } from "@/data/timing";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FaBowlFood, FaX } from "react-icons/fa6";
import { GiThermometerScale } from "react-icons/gi";
import { MdAccessAlarms } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";
import Footer from "@/components/footer";

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [dataTime, setDataTime] = useState<any[]>([]);
  const [dataFood, setDataFood] = useState<any[]>([]);
  const [dataDrink, setDataDrink] = useState<any[]>([]);
  const [dataInc, setDataInc] = useState<any>([]);
  const [menu, setMenu] = useState<any | null>(null);
  const [food, setFood] = useState<any | null>(null);
  const [drink, setDrink] = useState<any | null>(null);
  const [incredient, setIncredient] = useState<any | null>(null);
  const [time, setTime] = useState<any | null>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openFood, setOpenFood] = useState<boolean>(false);
  const [openDrink, setOpenDrink] = useState<boolean>(false);

  const [openIncredient, setOpenIncredient] = useState<boolean>(false);

  const [openTiming, setOpenTiming] = useState<boolean>(false);

  const getMenu = () => {
    getAllMenu().then((e: any) => {
      setData(e);
    });
  };
  const getFood = () => {
    getAllFood().then((e: any) => {
      setDataFood(e);
    });
  };
  const getInc = () => {
    getAllIncredient().then((e: any) => {
      setDataInc(e);
    });
  };
  const getDri = () => {
    getDrink().then((e: any) => {
      setDataDrink(e);
    });
  };
  const getTim = () => {
    getAllTiming().then((e: any) => {
      setDataTime(e);
    });
  };

  const openForm = (value: string) => {
    if (value === "Food") {
      setOpenFood(true);
      setOpenDrink(false);
      setOpenMenu(false);
      setOpenIncredient(false);
      setOpenTiming(false);
    }
    if (value === "Menu") {
      setOpenMenu(true);
      setOpenDrink(false);
      setOpenFood(false);
      setOpenIncredient(false);
      setOpenTiming(false);
    }
    if (value === "Beverages") {
      setOpenFood(false);
      setOpenDrink(true);
      setOpenMenu(false);
      setOpenIncredient(false);
      setOpenTiming(false);
    }
    if (value === "Ingredients") {
      setOpenIncredient(true);
      setOpenFood(false);
      setOpenDrink(false);
      setOpenMenu(false);
      setOpenTiming(false);
    }
    if (value === "Timing") {
      setOpenTiming(true);
      setOpenFood(false);
      setOpenDrink(false);
      setOpenMenu(false);
      setOpenIncredient(false);
    }
  };

  useEffect(() => {
    getAllMenu().then((e: any) => {
      setData(e);
    });
    getAllFood().then((e: any) => {
      setDataFood(e);
    });
    getAllTiming().then((e: any) => {
      setDataTime(e);
    });
    getAllIncredient().then((e: any) => {
      setDataInc(e);
    });
    getDrink().then((e: any) => {
      setDataDrink(e);
    });
  }, []);
  return (
    <div className="w-full h-full relative overflow-y-auto overflow-x-hidden">
      <div className="w-full h-full overflow-y-scroll scroll-smooth overflow-x-hidden relative px-2">
        <section
          id="menu"
          className="w-full min-h-full justify-center items-center "
        >
          <TopBar
            onClick={(e: any) => {
              console.log(e);
              openForm(e);
            }}
          />
          <div className="w-full h-auto md:h-[90vh] flex flex-col justify-start md:justify-evenly items-center my-1 md:my-10 space-y-4 md:space-y-0">
            <h1 className="w-full md:w-3/4 text-md text-md md:text-[60px]  font-extrabold text-center">
              Revolutionize Your Menu Experience: Uncomplicated Excellence
            </h1>
            <p className="w-full md:w-2/6   text-center text-lg text-gray-500 font-bold my-10">
              Experience the ease of menu management like never
              before.Experience the ease of menu management like never
              before.Elevate your restaurant's reputation with seamless menu
              updates.
            </p>
            <Button className=" text-sm mt-4">Explore</Button>
          </div>

          <div className="w-full h-auto flex flex-col justify-center items-center my-10 mt-15 bg-slate-50 pb-15">
            <h1 className="w-full md:w-3/4 text-md md:text-[60px]  font-extrabold text-center mt-10">
              Today's Menu: Delight in Daily Offerings
            </h1>
            <p className="w-full  md:w-2/6  m-10 text-center text-lg text-gray-70">
              Discover what's cooking today with our dynamic menu feature.
              Whether it's breakfast, lunch, or dinner, easily view daily
              specials tailored to your time. Can't find what you're craving? No
              problem! Create your own menu masterpiece in minutes. Each menu
              can include a variety of delectable dishes and refreshing drinks,
              ensuring your culinary creations shine bright.
            </p>
            <MenuList
              newData={data}
              onclick2={(e: any) => {
                setMenu(e);
                setOpenMenu(true);
              }}
              onclick={() => {
                setOpenMenu(true);
              }}
            />
            <div className="w-full h-auto flex flex-col justify-center items-center my-10 mt-15 bg-white pb-15">
              <h1 className="w-full md:w-3/4 text-md md:text-[60px]  font-extrabold text-center mt-10">
                Why Us?
                <p className="text-xl m-4">
                  The Flavor Architects: Designing Culinary Wonders
                </p>
              </h1>

              <p className="w-full md:w-2/6  m-10 text-center text-lg text-gray-70">
                Behind every delectable dish and delightful dining experience is
                a team of passionate individuals dedicated to culinary
                excellence. Get to know the talented chefs, mixologists, and
                hospitality experts who bring our vision to life
              </p>
            </div>
          </div>

          {/* <div className="w-full h-auto md:h-[80vh] flex flex-col md:flex-row relative">
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
                crispy calamari. For the main course, indulge in our chefs
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
        </div> */}
        </section>
        <section id="food" className="w-full min-h-full  ">
          {/* <div className="flex-1 h-full flex flex-col justify-center items-center mt-8 ">
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
                  people together in shared appreciation and celebration. Lets
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
        </div> */}
          <div className="w-full h-auto flex flex-col justify-center items-center my-10 mt-15  pb-15">
            <h1 className="w-full md:w-3/4 text-md md:text-[60px]  font-extrabold text-center mt-10">
              Indulge in Culinary Excellence: Our Signature Dishes
            </h1>
            <p className="w-full md:w-2/6  m-10 text-center text-lg text-gray-70">
              Prepare to tantalize your taste buds with our extraordinary
              culinary creations. At My Menu, we pride ourselves on crafting
              exceptional dishes that showcase the artistry and expertise of our
              talented chefs.
            </p>
            <FoodList
              onclick2={(e: any) => {
                setFood(e);
                setOpenFood(true);
              }}
            />
          </div>
        </section>
        <section id="beverages" className="w-full min-h-full">
          {/* <div className="flex-1 h-full flex flex-col justify-center items-center mt-8 ">
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
                  a beverage; its a warm greeting, a gesture of hospitality, and
                  a taste of whats to come. Whether its a refreshing glass of
                  sparkling water garnished with a twist of lemon, a fruity
                  mocktail bursting with tropical flavors, or a sophisticated
                  flute of champagne, the welcome drink is an invitation to
                  relax, unwind, and embark on a journey of culinary delights.
                  Its the first impression that leaves a lasting impact,
                  signaling to guests that they are valued and cared for from
                  the moment they arrive. So heres to the welcome drink—a small
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
        </div> */}
          <div className="w-full h-auto flex flex-col justify-center items-center my-10 mt-15 bg-slate-50 pb-15">
            <h1 className="w-full md:w-3/4 text-md md:text-[60px]  font-extrabold text-center mt-10">
              Quench Your Thirst: Explore Our Beverage Menu
            </h1>
            <p className="w-full md:w-2/6  m-10 text-center text-lg text-gray-70">
              From refreshing classics to innovative concoctions, our beverage
              menu is crafted to delight every palate. Sip on handcrafted
              cocktails, indulge in aromatic coffees, or savor the sweetness of
              our freshly squeezed juices. Whether you're in the mood for
              something bubbly, bold, or soothing, our curated selection of
              beverages promises to elevate your dining experience. Join us and
              discover your new favorite drink today
            </p>
            <DrinkList />
          </div>
        </section>
        <section id="ingredients" className="w-full min-h-full mt-10">
          {/* <div className="flex-1 h-full flex flex-col justify-center items-center mt-8 ">
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
        </div> */}
          <div className="w-full h-auto flex flex-col justify-center items-center my-10 mt-15 bg-slate-50 pb-15">
            <h1 className="w-full md:w-3/4 text-md md:text-[60px]  font-extrabold text-center mt-10">
              From Farm to Table: Our Fresh Ingredients
            </h1>
            <p className="w-full md:w-2/6  m-10 text-center text-lg text-gray-70">
              We believe that great meals start with great ingredients. That's
              why we meticulously select only the freshest, highest-quality
              ingredients for our dishes. From farm-fresh produce to sustainably
              sourced meats and seafood, each ingredient is thoughtfully chosen
              to ensure exceptional flavor and quality in every bite.
            </p>
            <Indredients />
          </div>

          {/* <div className="flex-1 h-full flex flex-col justify-center items-center mt-8 ">
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
        <Timing /> */}
        </section>
        <section id="about" className="w-full min-h-full mt-10">
          {/* <div className="flex-1 h-full flex flex-col justify-center items-center mt-8 ">
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
        </div> */}

          <div className="w-full h-auto flex flex-col justify-center items-center my-10 mt-15  pb-15">
            <h1 className="w-full md:w-3/4 text-md md:text-[60px]  font-extrabold text-center mt-10">
              Get to Know Us :
            </h1>
            <p className="w-full md:w-2/6  text-lg text-gray-70">
              At My Menu, we are more than just a restaurant; we are culinary
              artisans dedicated to crafting unforgettable dining experiences.
              With a passion for creativity and a commitment to excellence, we
              blend flavors, textures, and techniques to create dishes that
              delight the palate and nourish the soul.
            </p>
            <br />
            <p className="w-full md:w-2/6   text-lg text-gray-70">
              Our journey began with a shared love for food and a vision to
              redefine the dining experience. Today, we proudly stand as a
              beacon of culinary innovation, where every dish tells a story and
              every meal is an adventure.
            </p>
            <br />

            <p className="w-full md:w-2/6  text-lg text-gray-70">
              From our locally sourced ingredients to our meticulously crafted
              menus, we prioritize quality, sustainability, and authenticity in
              everything we do. Whether you're joining us for a casual meal,
              celebrating a special occasion, or seeking inspiration for your
              next culinary adventure, we invite you to experience the magic of
              [Your Company Name]. Welcome to a world where flavor knows no
              bounds.
            </p>
          </div>
          <Footer />

          {/* <div className="flex-1 h-full flex flex-col justify-center items-center mt-8 ">
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
        <Timing /> */}
        </section>
        <section className="w-full h-[100px] bg-black text-white -px-28"></section>

        {/* <div className="w-full">
        <FormContainer
          editValue={{}}
          dataTime={dataTime}
          dataDrink={dataDrink}
          dataFood={dataFood}
          onClick={() => {
            getItems();
          }}
        />
      </div> */}
        {/* <div className="fixed bottom-4 right-4 bg-white rounded-3xl">
        <Logo />
      </div> */}
      </div>
      {openMenu && (
        <div className="w-full h-full absolute top-0 left-0 bg-black/40 overflow-x-hidden  flex justify-center items-center">
          <div className="w-full   md:w-2/6  bg-white p-6 rounded-md shadow-md overflow-y-auto">
            <div className="w-full h-[20px] flex flex-row justify-between   pb-1  items-center">
              <p className="text-xl font-bold">Menu :</p>
              <Button
                onClick={() => {
                  setOpenMenu(false);
                  setMenu(null);
                }}
              >
                <FaX />
              </Button>
            </div>
            <FormContainer
              editValue={menu}
              dataTime={dataTime}
              dataDrink={dataDrink}
              dataFood={dataFood}
              onClick={() => {
                getMenu();
                setOpenMenu(false);
              }}
            />
          </div>
        </div>
      )}
      {openFood && (
        <div className="w-full h-full absolute top-0 left-0 bg-black/40 overflow-x-hidden  flex justify-center items-center">
          <div className="w-full   md:w-2/6  bg-white p-6 rounded-md shadow-md overflow-y-auto">
            <div className="w-full h-[20px] flex flex-row justify-between   pb-1  items-center">
              <p className="text-xl font-bold">Food :</p>

              <Button
                onClick={() => {
                  setOpenFood(false);
                  setFood(null);
                }}
              >
                <FaX />
              </Button>
            </div>
            <FormContainer2
              inc={dataInc}
              editValue={food}
              onClick={() => {
                getFood();
                setOpenFood(false);
              }}
            />
          </div>
        </div>
      )}
      {openDrink && (
        <div className="w-full h-full absolute top-0 left-0 bg-black/40 overflow-x-hidden  flex justify-center items-center">
          <div className="w-full   md:w-2/6  bg-white p-6 rounded-md shadow-md overflow-y-auto">
            <div className="w-full h-[20px] flex flex-row justify-between   pb-1  items-center">
              <p className="text-xl font-bold">Beverage :</p>

              <Button
                onClick={() => {
                  setOpenDrink(false);
                  setDrink(null);
                }}
              >
                <FaX />
              </Button>
            </div>
            <FormContainer3
              // inc={dataInc}
              editValue={drink}
              onClick={() => {
                getDri();
                setOpenDrink(false);
              }}
            />
          </div>
        </div>
      )}
      {openIncredient && (
        <div className="w-full h-full absolute top-0 left-0 bg-black/40 overflow-x-hidden  flex justify-center items-center">
          <div className="w-full   md:w-2/6  bg-white p-6 rounded-md shadow-md overflow-y-auto">
            <div className="w-full h-[20px] flex flex-row justify-between   pb-1  items-center ">
              <p className="text-xl font-bold">Ingredient :</p>

              <Button
                onClick={() => {
                  setOpenIncredient(false);
                  setIncredient(null);
                }}
              >
                <FaX />
              </Button>
            </div>
            <FormContainer4
              // inc={dataInc}
              editValue={incredient}
              onClick={() => {
                getInc();
                setOpenIncredient(false);
              }}
            />
          </div>
        </div>
      )}
      {openTiming && (
        <div className="w-full h-full absolute top-0 left-0 bg-black/40 overflow-x-hidden  flex justify-center items-center">
          <div className="w-full   md:w-2/6  bg-white p-6 rounded-md shadow-md overflow-y-auto">
            <div className="w-full h-[20px] flex flex-row justify-between   pb-1  items-center">
              <p className="text-xl font-bold">Timing :</p>
              <Button
                onClick={() => {
                  setOpenTiming(false);
                  setTime(null);
                }}
              >
                <FaX />
              </Button>
            </div>
            <FormContainer5
              // inc={dataInc}
              editValue={time}
              onClick={() => {
                getTim();
                setOpenTiming(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
