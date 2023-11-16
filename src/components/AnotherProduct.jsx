import React, { useState, useEffect } from "react";
import "../components/AnotherProduct.css";
import Navbar from "./Navbar";
import "bulma/css/bulma.min.css";
import IG1 from "../Images/IG1.jpg";
import IG2 from "../Images/Rail1.jpg";
import IG3 from "../Images/outdoor wpc deck tiles.jpg";
import IG4 from "../Images/Gum.png";
import IG5 from "../Images/mirror board1.jpg";
import IG6 from "../Images/stonepanel2.jpg";
import IG7 from "../Images/UV marble sheet.jpg";
import Product1 from "../Images/product1.jpg";
import Product2 from "../Images/product2.jpg";
import Product3 from "../Images/product3.jpg";
import Product4 from "../Images/product4.jpg";
import Rail1 from "../Images/R2.jpg";
import Rail2 from "../Images/R3.jpg";
import Rail3 from "../Images/R4.jpg";
import Rail4 from "../Images/R5.jpg";
import Deck1 from "../Images/Deck1.jpg";
import Deck2 from "../Images/Deck2.jpg";
import Deck3 from "../Images/Deck3.jpg";
import Deck4 from "../Images/Deck4.jpg";
import mirror from "../Images/mirrorboard2.jpg";
import stone from "../Images/StonePanel.jpeg";
import matt from "../Images/UV Matt sheet.png";
import { Link, useParams } from "react-router-dom";

const products = [
  {
    name: "Uv Marble Sheets",
    id: 1,
    image: IG1,
    addmin: [Product1, Product2, Product3, Product4],
    des: `UV marble sheets are a revolutionary product designed to bring elegance 
    and durability to interior spaces. Crafted using advanced UV printing technology, these 
    sheets replicate the exquisite look of natural marble while offering exceptional versatility and resilience.`,
  },
  {
    name: "Fluted Panels",
    id: 2,
    image: IG2,
    addmin: [Rail1, Rail2, Rail3, Rail4],
    des: `Fluted panels are an architectural marvel, renowned for their ability to 
    effortlessly blend classic elegance with contemporary design. These panels feature a series of vertical grooves or channels, 
    creating a striking visual effect that adds depth, texture, and dimension to interior and exterior spaces.`,
  },
  {
    name: " Outdoor WPC Deck Tiles",
    id: 3,
    image: IG3,
    addmin: [Deck1, Deck2, Deck3, Deck4],
    des: `Outdoor WPC (Wood-Plastic Composite) deck tiles are an 
    innovative solution for creating inviting and durable outdoor spaces. 
    These tiles combine the natural aesthetics of wood with the durability and low maintenance 
    of composite materials, offering a versatile and eco-friendly alternative to traditional decking options.`,
  },
  {
    name: "Silicone Adhersive Gel",
    id: 4,
    image: IG4,
    addmin: [IG4, IG4, IG4, IG4],
    des: `Silicone adhesive gel is a versatile and high-performance bonding agent 
    known for its strong adhesion properties across a wide range of surfaces. Formulated from silicone-based compounds,
     this adhesive gel is designed to create durable bonds in various applications, offering numerous advantages`,
  },
  {
    name: "Carbon Crystal Mirror Board",
    id: 5,
    image: IG5,
    addmin: [mirror, mirror, mirror, mirror],
    des: `The Carbon Crystal Mirror Board is an 
    innovative blend of sleek design and cutting-edge technology. Crafted with precision using carbon crystal material,
     this mirror board stands out for its remarkable clarity and reflective properties.`,
  },
  {
    name: "Stone Panel",
    id: 6,
    image: IG6,
    addmin: [stone, stone, stone, stone],
    des: `Stone Panel epitomizes the fusion of nature's raw beauty 
    and modern craftsmanship. Crafted from authentic stone, each panel showcases 
    unique textures and earthy hues, bringing the outdoors inside with its organic appeal. 
    Beyond its aesthetic charm, these panels offer durability and versatility, 
    suitable for various applications from accent walls to architectural features.`,
  },
  {
    name: "UV Matt Sheet",
    id: 7,
    image: IG7,
    addmin: [matt, matt, matt, matt],
    des: `UV Matt Sheet redefines the standards of protection and aesthetics. 
    Engineered with UV-resistant materials and a matte finish, this sheet offers 
    unparalleled durability while maintaining a sleek, refined appearance. Its UV-resistant properties ensure longevity,
     making it an ideal choice for both indoor and outdoor applications.`,
  },
];

const AnotherProduct = () => {
  const [name, setName] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const singleProduct = products.find((product) => {
      return product.id === parseInt(id);
    });
    setName(singleProduct);
  }, [id]);
  console.log(name);

  return (
    <React.Fragment>
      <Navbar />
      <section className="section hey">
        <div className="container mt-5">
          <div className="columns">
            <div className="column">
              <article>
                <img src={name.image} alt="" />
                {/* <h1 className="is-size-4">{name.name}</h1> */}
              </article>
            </div>
            <div className="column">
              <h3 className="is-size-3-desktop is-size-5-mobile has-text-weight-bold">
                {name.name}
              </h3>
              <div>
                <h4 className="is-size-5-desktop has-text-weight-bold">
                  Some Info About Product
                </h4>
                <p className="is-size-5-desktop">{name.des}</p>
                <div className="mt-3">
                  <Link
                    to="/"
                    className="button has-text-weight-bold mr-2 is-responsive"
                    style={{ color: "#01070f" }}
                  >
                    Back Home
                  </Link>
                  <Link
                    to="https://wa.me/2348147374095"
                    className="button has-text-weight-bold is-responsive"
                    style={{ color: "#01070f" }}
                  >
                    Shop Now
                  </Link>
                </div>
                <h2 className="is-size-4-desktop is-size-6-mobile mt-4">
                  Other Colors
                </h2>
                <div className="columns is-mobile m2-4">
                  <div className="column">
                    <img src={products[id - 1].addmin[0]} alt="" width={100} />
                  </div>
                  <div className="column">
                    <img src={products[id - 1].addmin[1]} alt="" width={100} />
                  </div>
                  <div className="column">
                    <img src={products[id - 1].addmin[2]} alt="" width={100} />
                  </div>
                  <div className="column">
                    <img src={products[id - 1].addmin[3]} alt="" width={100} />
                  </div>
                  <div className="column">
                    <img src={products[id - 1].addmin[4]} alt="" width={100} />
                  </div>
                  <div className="column">
                    <img src={products[id - 1].addmin[5]} alt="" width={100} />
                  </div>
                  <div className="column">
                    <img src={products[id - 1].addmin[6]} alt="" width={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AnotherProduct;
