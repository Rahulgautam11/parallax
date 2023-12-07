import React, { useRef, useState } from 'react'
import './style.scss'
import Searchbar from '../../../common/Searchbar/Searchbar';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Image1 from '../../../Assets/Image/imgae1.jpg';
import Image2 from '../../../Assets/Image/image2.jpg';
import Image3 from '../../../Assets/Image/image3.jpg';
import Image4 from '../../../Assets/Image/image4.jpg';
import Image5 from '../../../Assets/Image/image5.jpg';
import Image6 from '../../../Assets/Image/image6.jpg';
import Image7 from '../../../Assets/Image/image7.jpg';
import Image8 from '../../../Assets/Image/image8.jpg';
import Image9 from '../../../Assets/Image/image9.jpg';
import PopUp from '../../Popup';

const DomainData = [
    { img: Image1, about: "Digital Marketing Consulting", tittle: "Digital Marketing is continuously evolving and can be very confusing. It is critical to have a crisp, sorted-out, business-aligned strategy to get the maximum return on your investments.We put gether the right strategy, baseline, metrics, knowledge, techniques, and insights suitable to your business and industry." },
    { img: Image2, about: "Integrated Digital Marketing", tittle: "The whole is greater than the sum of its parts – Aristotle In the digital parlance, this is most relevant for integrated digital marketing. You need an end-to-end strategy using the suitable tools in the right order and quantity to get the best outcome for your business. Let us help you with this digital mix!" },
    { img: Image3, about: "Search Engine Optimization", tittle: "Search Engine Optimization (SEO) is about getting the right and optimized website structure, user-centric design, quality links, and citations. It needs multi-disciplinary skills to get-it-done, and we are right on top of the game." },
    { img: Image4, about: "Social Media Marketing", tittle: "Social media is an effective and efficient medium to interactively engage targeted users, and get your brand and marketing message across them. It needs careful planning, messaging and use of technology. We make it happen for you." },
    { img: Image5, about: "App Store Optimization", tittle: "It is critical to have a good App to be successful. However, it is important to do App Store Optimisation (ASO) across iTunes and Google Play Store to ensure that you get your due rankings. We help you get your rightful position in the app store rankings." },
    { img: Image6, about: "PPC Management", tittle: "We work tirelessly to squeeze out the best return on investment from paid search advertising for you through a holistic approach encompassing: keyword and competitive research landing page optimisation / conversion rate optimisation (CRO) appealing creatives" },
    { img: Image7, about: "Conversion Rate Optimization", tittle: "Experimentation is key to good marketing. We bring in our years of experience to help you improve conversion from your website and landing page through A/B and Multi-variate testing. This brings maximum Return on Investment (RoI) as you generate extra business from the same visitors!" },
    { img: Image8, about: "Media Buying & Planning", tittle: "Media planning, buying, and management are key to drive proper Returns on Investment (RoI) from your digital advertising spend. The medium gives the flexibility to change targeting, messaging and call-to-action in real-time and hence need an expert to manage it for you. We do the needful with acute business sense." },
    { img: Image9, about: "Content Marketing", tittle: "Content Marketing is the most potent marketing tool in the current scenario. People buy from those whom they respect and trust. Content marketing creates confidence. Besides, it is a critical tool to continually engage the prospect and stay in front of their eyes. We help you put together a content marketing strategy and execute it." },
]
const ServiceList = () => {
    const openRef = useRef(null);
    const [data, setData] = useState([])

    useEffect(() => {
        Aos.init({ duration: 1200, });
    }, [])

    const HandleOpen = (e) => {
        openRef.current.open();
        setData([...data, e])

    }
    console.log(data)
    const closePopup = () => {
        openRef.current.close();
    }
    return (
        <div className='services_list_container'>
            <h1 className='Services_heading'>START WITH THE PERFECT SOURCE</h1>
            <p className='Services_sub_heading'>We Deliver 125 Web & Mobile Projects per Year.</p>

            <div className="card_container">
                {
                    DomainData.map((item, key) => {
                        return (
                            <div className="card_Services" data-aos="slide-up" key={key}>
                                <figure className='Image_wrap'>
                                    <img src={item.img} alt="" />
                                </figure>
                                <h2 className="tittle_heading">{item.about}</h2>
                                <p className="tittle_para">{item.tittle}</p>
                                <button className='view_more_btn' onClick={() => HandleOpen(item)}>View More</button>
                            </div>

                        )
                    })
                }
            </div>
            <PopUp openpopup={openRef} onclose={closePopup} Data={data} setData={setData} />

        </div>
    )
}

export default ServiceList;