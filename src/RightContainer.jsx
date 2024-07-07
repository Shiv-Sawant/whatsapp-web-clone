import React, { useEffect, useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import pdfimg from './assets/pdf.jpeg'
import visitin1 from './assets/visitincard1.png'
import visitin2 from './assets/visitincard2.png'
import visitin3 from './assets/visitincard3.png'
import { Typewriter } from "react-simple-typewriter";
import { ImCheckboxChecked } from 'react-icons/im'

const RightContainer = () => {
    const [isActive, setIsActive] = useState({
        hsc: false,
        mba: false,
        ca: false,
        reas: false
    })

    const [showContent, setShowContent] = useState({
        showText1: false,
        showpdf: false,
        showUpdated: false,
        showpdfImage: false,
        showpdfDetails: false,
        containerShowText1: false,
        containerShowImage1: false,
        containerShowImage2: false,
        containerShowImage3: false,
        container1ShowText1: false,
        container1ShowImage1: false,
        container1Details: false,
        container2firstText: false,
        container2firstText1: false,
        container2firstText2: false,
        container2firstText3: false,
        container2firstText4: false,
        container2firstText5: false,
    })

    const [isSearch, setIsSearch] = useState()

    let firstArray = [
        {
            firstText: 'Hello',
            image1: pdfimg,
            secondText: 'Uploaded',
            icon: < ImCheckboxChecked className="checkicon" />,
            image2: 'https://static.wixstatic.com/media/91ad40_e8aabd93568742169c363b02d40313ae~mv2.png/v1/fill/w_301,h_356,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot__12_-removebg-preview.png',
            finalText: ' The text extract provides three scenarios for X Ltd. and asks for the corresponding journal entries:1. X Ltd. subdivides its equity shares into 10,000 equity shares of 10 each, of which 8 per share is called up and paid up.2. X Ltd. converts its 1,000 equity shares of 100 each (assumed fully-paid) into 1,00,000 worth of stock.3. The preference shares are converted into 11% unsecured debentures of 100 each (including arrears of dividends). Patents and Goodwill are to be written off.The journal entries for these scenarios would be:1. *Equity Share Capital A/c Dr. 80,000**To Equity Share Capital (₹10) A/c 80,000*(Being equity shares of ₹100 each subdivided into shares of ₹10 each)2. *Equity Share Capital A/c Dr. 1,00,000**To Stock A/c 1,00,000*(Being 1,000 equity shares of ₹100 each converted into ₹1,00,000 worth of stock)3. *Preference Share Capital A/c Dr. 1,50,000**Dividend in Arrears A/c Dr. 33,000**To 11% Unsecured Debentures A/c 1,83,000*(Being preference shares converted into 11% unsecured debentures including arrears of dividends)*Goodwill A/c Dr. 80,000**Patents A/c Dr. 27,800**To Profit and Loss A/c 1,07,800*(Being intangible assets written off)'
        },
        {
            firstText: 'Hello',
            image1: visitin1,
            image2: visitin2,
            image3: visitin3,
        },
        {
            firstText: 'Hello',
            image1: "https://static.wixstatic.com/media/91ad40_cc0987dd3d354e47a5f21bc0d77752ab~mv2.png/v1/fill/w_334,h_348,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bill-removebg-preview.png",
            finalText: 'Summary: CASH BILL Invoice Number: No.40 Vendor: Name: M.No food Products: Product ID: 1 Category: Grocery Description: Tomato Quantity: 3 Unit Price: 55 Tax Rate: 0 %Total: 165 --- Product ID: 2 Category: Grocery Description: onion Quantity: 40 Unit Price: 2 Tax Rate: 0 %Total: 80--- Product ID: 3Category: Kitchen appliances',
        },
        {
            firstText: 'Hello',
            firstText1: 'Meet Mr X at Yellowknife, Mars tomorrow 4pm',
            firstText2: 'itle: Meet Mr X at Yellowknife, Mars 🚀🔴👽Added to your todo !!',
            firstText3: 'Remind me to turn off the gas after 5 min',
            firstText4: 'title: Turn the Gas off ⛔️🔥Added to your todo !!',
            firstText5: 'A Reminder to complete your task: Title: Turn the Gas off ⛔️🔥.',
        }

    ]


    const handleType = (count) => {
        // access word count number
        console.log(count)

    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }


    let scrollid = document.getElementById('scroll')



    if (scrollid) {
        scrollid.scrollIntoView()
    }

    useEffect(() => {
        let timout1
        let timout2
        let timout3
        let timout4
        let timout5
        if (isActive.hsc) {
            timout1 = setTimeout(() => {
                setShowContent((prevState) => ({ ...prevState, showText1: true }))
            }, 1000);

            timout2 = setTimeout(() => {
                setShowContent((prevState) => ({ ...prevState, showpdf: true }))
            }, 4000);

            timout3 = setTimeout(() => {
                setShowContent((prevState) => ({ ...prevState, showUpdated: true }))
            }, 6000);

            timout4 = setTimeout(() => {
                setShowContent((prevState) => ({ ...prevState, showpdfImage: true }))
            }, 8000);

            timout5 = setTimeout(() => {
                // scrollContainerRef.current.const scrollTop = scrollContainerRef.current.scrollHeight;
                setShowContent((prevState) => ({ ...prevState, showpdfDetails: true }))
            }, 10000);
        }

        return ()=>{
            clearTimeout(timout1)
            clearTimeout(timout2)
            clearTimeout(timout3)
            clearTimeout(timout4)
            clearTimeout(timout5)
        }
    }, [showContent, isActive.hsc])

    return (
        <>
            <div class="header">
                <div className="close-button" onClick={() => {
                    setIsActive((prevState) => ({ ...prevState, hsc: false }))
                }}
                >
                    <BsArrowLeftShort />
                </div>
                <div class="img-text">
                    <h4>Q&A with Text and Image<br /></h4>
                    <p>Online</p>
                </div>

                <div>
                    <span className="desktop-online">Online</span>
                </div>
            </div >

            <div className='chat-container' id="chat-container">
                <>
                    {
                        showContent.showText1 ?
                            <>
                                <p class="message-box friend-message" id="typewriter">
                                    <Typewriter
                                        words={[firstArray[0].firstText]}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={200}
                                        deleteSpeed={50}
                                        delaySpeed={2500}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    />
                                </p>
                            </>
                            :
                            null
                    }

                    {
                        showContent.showpdf ?
                            <>
                                <div className="message-box my-message">
                                    <img src={firstArray[0].image1} alt="" className="pdfimg" />
                                </div>
                            </>
                            :
                            null
                    }

                    {
                        showContent.showUpdated ?
                            <div>
                                <p class="message-box friend-message" id="typewriter">
                                    <Typewriter
                                        words={[firstArray[0].secondText]}
                                        loop={0}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={2500}
                                        onLoopDone={handleDone}
                                        onType={handleType}
                                    />
                                    {firstArray[0].icon}

                                </p>
                            </div>
                            :
                            null
                    }


                    {
                        showContent.showpdfImage ?
                            <div className="message-box my-message"><img className="pdfimg" src={firstArray[0].image2} alt="" /></div>
                            :
                            null
                    }

                    {
                        showContent.showpdfDetails ?
                            <div className="message-box friend-message" style={{ scrollSnapAlign: 'end' }} id="scroll">
                                <p style={{ textAlign: 'left' }}>
                                    {firstArray[0].finalText}
                                </p>
                            </div>
                            :
                            null
                    }
                </>
            </div>
        </>
    )
}

export default RightContainer