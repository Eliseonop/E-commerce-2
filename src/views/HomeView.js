import {useState} from "react"
import { Image, Container, Carousel } from "react-bootstrap"
import { bannerText, urlbanner } from "../assets/HomeAsset"
import "../css/HomeView.css"
import { Link } from "react-router-dom"

export default function Homeview() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    const overIamge = {
        position: 'absolute',
        bottom: '2rem'
    }
    return (
        <div>
{/*             <banner className="position-relative"   >
                <img
                    id="bannerimage"
                    src={urlbanner.url1}
                    className="img-fluid"
                />
                <Link id="figcaption" className="nav-link" to="/productos">
                    <figcaption>
                        <h3>
                            {bannerText.title}
                        </h3>
                        <h5>
                            {bannerText.description}
                        </h5>
                    </figcaption>
                </Link>
            </banner> */}

            <Carousel className="position-relative" >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={urlbanner.url1}
                        alt="First slide"
                        data-orden="1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={urlbanner.url2}
                        alt="Second slide"
                        data-orden="2"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={urlbanner.url3}
                        alt="Third slide"
                        data-orden="3"
                    />
                </Carousel.Item>
            </Carousel>
            <Link id="figcaption" className="nav-link" to="/productos">
                    <figcaption>
                        <h3>
                            {bannerText.title}
                        </h3>
                        <h6>
                            {bannerText.description}
                        </h6>
                    </figcaption>
                </Link>
        </div>
    )
}