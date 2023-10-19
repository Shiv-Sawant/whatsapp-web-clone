import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { PiStudentBold } from 'react-icons/pi'
import { BsArrowLeftShort } from 'react-icons/bs'
import { ImCheckboxChecked } from 'react-icons/im'
import pdfimg from './assets/pdf.jpeg'
import visitin1 from './assets/visitincard1.png'
import visitin2 from './assets/visitincard2.png'
import visitin3 from './assets/visitincard3.png'
import { Typewriter } from "react-simple-typewriter";
import RightContainer from "./RightContainer";



function App() {
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

  let recentChatArray = [
    {
      name: 'Q&A with Text and Image',
      classname: isActive.hsc ? 'hscbox' : "",
      h4class: isActive.hsc ? 'hscboxh4' : "",
      pclass: isActive.hsc ? 'hscboxp' : ""
    },
    {
      name: 'Visiting card / Name Board',
      classname: isActive.mba ? 'mbabox' : "",
      h4class: isActive.mba ? 'mbaboxh4' : "",
      pclass: isActive.mba ? 'mbaboxp' : ""
    },
    {
      name: 'Expenses Bills',
      classname: isActive.ca ? 'cabox' : "",
      h4class: isActive.ca ? 'caboxh4' : "",
      pclass: isActive.ca ? 'caboxp' : ""
    },
    {
      name: 'To Do',
      classname: isActive.reas ? 'reasbox' : "",
      h4class: isActive.reas ? 'reasboxh4' : "",
      pclass: isActive.reas ? 'reasboxp' : ""
    },
  ]

  const filter = isSearch && isSearch.length !== 0 ? recentChatArray.filter((chat) => {
    return chat?.name?.toLowerCase().includes(isSearch?.toLowerCase())
  }) : recentChatArray


  const handleType = (count) => {
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  const handleActive = (chat) => {
    setIsActive((prevState) => ({ ...prevState, hsc: chat.name === "Q&A with Text and Image" ? true : false, mba: chat.name === "Visiting card / Name Board" ? true : false, ca: chat.name === "Expenses Bills" ? true : false, reas: chat.name === "To Do" ? true : false }))
  }

  let scrollid = document.getElementById('scroll')

  if (scrollid) {
    scrollid.scrollIntoView()
  }

  useEffect(() => {
    let timout1;
    let timout2;
    let timout3;
    let timout4;

    if (isActive.hsc) {
      timout1 = setTimeout(() => {
        setShowContent((prevState) => ({ ...prevState, showText1: true }))
      }, 2000)
    } else {
      clearTimeout(timout1)

      let chatContainerId = document.getElementById('chat-container')

      if (document.getElementById('container1text1') != null) {
        chatContainerId.removeChild(document.getElementById('container1text1'))
      }

      if (document.getElementById('container1img1') != null) {
        chatContainerId.removeChild(document.getElementById('container1img1'))
      }

      if (document.getElementById('container1text2') != null) {
        chatContainerId.removeChild(document.getElementById('container1text2'))
      }

      if (document.getElementById('container1img2') != null) {
        chatContainerId.removeChild(document.getElementById('container1img2'))
      }



    }

    if (isActive.mba) {
      timout2 = setTimeout(() => {
        setShowContent((prevState) => ({ ...prevState, containerShowText1: true }))
      }, 2000)
    } else {
      clearTimeout(timout2)
    }

    if (isActive.ca) {
      timout3 = setTimeout(() => {
        setShowContent((prevState) => ({ ...prevState, container1ShowText1: true }))
      }, 2000)
    } else {
      clearTimeout(timout3)
    }

    if (isActive.reas) {
      timout4 = setTimeout(() => {
        setShowContent((prevState) => ({ ...prevState, container2firstText: true }))
      }, 2000)
    } else {
      clearTimeout(timout4)
    }

    // }

  }, [isSearch, filter, showContent, isActive.hsc, isActive.mba, isActive.ca, isActive.reas])


  return (
    <body>
      <div class="main-container">
        <div class='left-container' >
          <div class="header">
            <div className="header-first">
              <div class="nav-icons">
                <PiStudentBold />
                <p> Choose Use Case For Student</p>
              </div>
            </div>
          </div>


          <div class="notif-box">
            <div class="notif-text">
              <p>Welcome To ChatWithFolder.com</p>
            </div>
            <div className="input-svg">
              <input type="text" onChange={(e) => setIsSearch(e.target.value)} placeholder="Search or start new chat" />
              <AiOutlineSearch />
            </div>
          </div>

          <div class="search-container">
            <div class="input">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" onChange={(e) => setIsSearch(e.target.value)} placeholder="Search or start new chat   " />
            </div>
            <i class="fa-sharp fa-solid fa-bars-filter"></i>
          </div>


          <div className="chat-list">
            {
              filter.map((chat, index) => {
                return (
                  <div className={`chat-box ${chat.classname}`
                  } onClick={() => {
                    // handleShowContent()
                    handleActive(chat)
                  }} key={index} >
                    <div class="chat-details">
                      <div class="text-head">
                        <h4 className={chat.h4class}
                        >{chat.name}</h4>
                      </div>
                      <div class="text-message">
                        <p className={chat.pclass}>{chat.message}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
        {/* <div className="rightcontainer-overlay"> overlay </div> */}

        <div className={isActive.hsc || isActive.mba || isActive.ca || isActive.reas ? 'right-container mobile-left-container' : 'rightcontainer-overlay '} >
          {isActive.hsc ?
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
                        {/* <p class="message-box friend-message" id="container1text1">
                          <Typewriter
                            words={["Hell" + `<span>o</span>`]}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={200}
                            deleteSpeed={50}
                            delaySpeed={2500}
                            onLoopDone={handleDone}
                            onType={handleType}
                          />
                        </p> */}
                        <div className="message-box friend-message container1text1" id="">
                          <p>
                            Hello
                          </p>
                        </div>
                      </>
                      :
                      null
                  }

                  <>
                    <div className="message-box my-message container1img1" id="">
                      <img src={firstArray[0].image1} alt="" className="pdfimg" />
                    </div>
                  </>

                  {

                    <div className="message-box friend-message container1text2" id="container1text2">
                      <p>
                        Updated <ImCheckboxChecked className="checked" />
                      </p>
                    </div>
                  }


                  {
                    <div className="message-box my-message container1img2" id="container1img2"><img className="pdfimg" src={firstArray[0].image2} alt="" /></div>
                  }

                  {
                    <div className="message-box friend-message container1text3" id='container1text3 '>
                      <p style={{ textAlign: 'left' }}>
                        {firstArray[0].finalText}
                      </p>
                    </div>
                  }
                </>
              </div>
            </>
            // <RightContainer />
            :
            isActive.mba ?
              <>
                <div class="header">
                  <div className="close-button" onClick={() => {
                    setIsActive((prevState) => ({ ...prevState, hsc: false }))
                  }}
                  >
                    <BsArrowLeftShort />
                  </div>
                  <div class="img-text">
                    <h4>Visiting Card / Name Board<br /></h4>
                    <p>Online</p>
                  </div>

                  <div>
                    <span className="desktop-online">Online</span>
                  </div>
                </div >
                <div className='chat-container' id="chat-container">

                  <div className="friend-message message-box container2text1">
                    <p>
                      Hello
                    </p>
                  </div>

                  <div className="my-message message-box container2img1" id="container2img1">
                    <img src={visitin1} alt="" className="visiting1" />
                  </div>

                  <div className="friend-message message-box container2img2" id="container2img2">
                    <img src={visitin3} alt="" className="visiting3" />
                  </div>

                  <div className="my-message message-box container2img3" id="container2img3">
                    <img src={visitin2} alt="" className="visiting2" />
                  </div>

                </div>
              </>
              :
              isActive.ca ?
                <>
                  <div class="header">
                    <div className="close-button" onClick={() => {
                      setIsActive((prevState) => ({ ...prevState, hsc: false }))
                    }}
                    >
                      <BsArrowLeftShort />
                    </div>
                    <div class="img-text">
                      <h4>Expenses Bills<br /></h4>
                      <p>Online</p>
                    </div>

                    <div>
                      <span className="desktop-online">Online</span>
                    </div>
                  </div >
                  <div className='chat-container' id="chat-container">

                    <div className="message-box friend-message container3text1">
                      <p>
                        Hello
                      </p>
                    </div>

                    <div className="message-box my-message container3img1" id="container3img1">
                      <img src={firstArray[2].image1} alt="" className="pdfimg" />
                    </div>

                    <div className="message-box friend-message container3img2" id='container3img2' style={{ scrollSnapAlign: 'end' }}>
                      <p style={{ textAlign: 'left' }}>
                        {firstArray[2].finalText}
                      </p>
                    </div>
                  </div>
                </>
                :
                isActive.reas ?
                  <>
                    <div class="header">
                      <div className="close-button" onClick={() => {
                        setIsActive((prevState) => ({ ...prevState, hsc: false }))
                      }}
                      >
                        <BsArrowLeftShort />
                      </div>
                      <div class="img-text">
                        <h4>To Do<br /></h4>
                        <p>Online</p>
                      </div>

                      <div>
                        <span className="desktop-online">Online</span>
                      </div>
                    </div >

                    <div className='chat-container' id="chat-container">
                      <div className="message-box friend-message container4text1">
                        <p>
                          Hello
                        </p>
                      </div>

                      <div className="message-box my-message container4text2">
                        <p>
                          {firstArray[3].firstText1}
                        </p>
                      </div>

                      <div className="message-box friend-message container4text3">
                        <p>
                          {firstArray[3].firstText2}
                        </p>
                      </div>

                      <div className="message-box my-message container4text4">
                        <p>
                          {firstArray[3].firstText3}
                        </p>
                      </div>

                      <div className="message-box friend-message container4text5">
                        <p>
                          {firstArray[3].firstText4}
                        </p>
                      </div>

                      <div className="message-box friend-message container4text6">
                        <p>
                          {firstArray[3].firstText5}
                        </p>
                      </div>
                    </div>
                  </>
                  :
                  <div>
                    <div>
                      <img src="https://static.wixstatic.com/media/88c929_39b23578f54140058f3b9d18419bd63d~mv2.png/v1/fill/w_119,h_67,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/88c929_39b23578f54140058f3b9d18419bd63d~mv2.png" alt="" />
                    </div>
                    <div><h1>Welcome To chatwithfolder.com</h1></div>
                    <div>
                      <h4>
                        At Chat with Folder, we are committed to providing excellent customer service and are here to answer any questions or concerns you may have.
                      </h4>
                    </div>
                    <a href="https://www.chatwithfolder.com/" target="_blank" rel="noreferrer">

                      <div className="web-button">
                        <button>
                          Check The Website
                        </button>

                      </div>
                    </a>

                  </div>


          }


        </div>
      </div>
    </body >
  );
}

export default App;
