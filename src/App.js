import { useEffect, useState } from "react";
import RightContainer from "./RightContainer";
import MbaContainer from "./MbaContainer";
import CaContainer from "./CaContainer";
import ReasearchContainer from "./ReasearchContainer";
import { AiOutlineSearch } from 'react-icons/ai'
import { PiStudentBold } from 'react-icons/pi'
import img1 from './assets/custome.png'
import img2 from './assets/general.png'
import { BsFillFolderFill } from 'react-icons/bs'
import { FaTools } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
import { BsArrowLeftShort } from 'react-icons/bs'



function App() {
  const [isActive, setIsActive] = useState({
    hsc: window.innerWidth < 412 && window.innerHeight < 700 ? false : true,
    mba: false,
    ca: false,
    reas: false
  })
  const [isButtonClicked, setIsButtonClicked] = useState({
    isGeneralButton: false,
    isCustomerButton: false,
    isFolderButton: false,
    custButMsg1: false,
    custButMsg2: false,
    custButMsg3: false,
    custButMsg4: false,
    custButMsg5: false,
    custButMsg6: false,
    custButMsg7: false,
    isToolButton: false,
    isContactCardButton: false,
    isLetsTodoButton: false,
    isExpensesButton: false,
    isConverterbutton: false,
    isValidatorButton: false,

  })

  const [isSearch, setIsSearch] = useState()

  let recentChatArray = [
    {
      name: 'HSC Student',
      message: window.innerWidth < 415 ? "'How to use HSC Student ChatWithFolder.com...'" : "'How to use HSC Student ChatWithFolder...",
      classname: isActive.hsc ? 'hscbox' : "",
      h4class: isActive.hsc ? 'hscboxh4' : "",
      pclass: isActive.hsc ? 'hscboxp' : ""
    },
    {
      name: 'MBA Student',
      message: window.innerWidth < 415 ? "'How to use MBA Student ChatWithFolder.com...'" : "'How to use MBA Student ChatWithFolder...",
      classname: isActive.mba ? 'mbabox' : "",
      h4class: isActive.mba ? 'mbaboxh4' : "",
      pclass: isActive.mba ? 'mbaboxp' : ""
    },
    {
      name: 'CA Student',
      message: window.innerWidth < 415 ? "'How to use CA Student ChatWithFolder.com...'" : "'How to use CA Student ChatWithFolder...",
      classname: isActive.ca ? 'cabox' : "",
      h4class: isActive.ca ? 'caboxh4' : "",
      pclass: isActive.ca ? 'caboxp' : ""
    },
    {
      name: 'Reasearcher Student',
      message: window.innerWidth < 415 ? "'How to use Reasearch Student ChatWith...'" : "'How to use Reasearch Student...",
      classname: isActive.reas ? 'reasbox' : "",
      h4class: isActive.reas ? 'reasboxh4' : "",
      pclass: isActive.reas ? 'reasboxp' : ""
    },
  ]

  const filter = isSearch && isSearch.length !== 0 ? recentChatArray.filter((chat) => {
    return chat?.name?.toLowerCase().includes(isSearch?.toLowerCase())
  }) : recentChatArray



  useEffect(() => {

  }, [isSearch, filter])

  console.log()

  return (
    <body>
      <div class="main-container">
        {/* <div class={isActive.hsc || isActive.mba || isActive.ca || isActive.reas ? 'left-container mobile-left-container' : 'left-container '} > */}
        <div class='left-container' >
          <div class="header">
            <div className="header-first">
              <div class="nav-icons">
                <PiStudentBold />
                Choose Use Case For Student
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
                    setIsButtonClicked((prevState) => ({
                      ...prevState,
                      isGeneralButton: false,
                      isCustomerButton: false,
                      isFolderButton: false,
                      custButMsg1: false,
                      custButMsg2: false,
                      custButMsg3: false,
                      custButMsg4: false,
                      custButMsg5: false,
                      custButMsg6: false,
                      custButMsg7: false,
                      isToolButton: false,
                      isContactCardButton: false,
                      isLetsTodoButton: false,
                      isExpensesButton: false,
                      isConverterbutton: false,
                      isValidatorButton: false,
                    }))
                    setIsActive((prevState) => ({ ...prevState, hsc: chat.name === "HSC Student" ? true : false, mba: chat.name === "MBA Student" ? true : false, ca: chat.name === "CA Student" ? true : false, reas: chat.name === "Reasearcher Student" ? true : false }))
                  }} >
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
        <div className={isActive.hsc || isActive.mba || isActive.ca || isActive.reas ? 'right-container mobile-left-container' : 'right-container '} >
          {/* < > */}
          {
            isActive.hsc ?
              <>
                <div class="header">
                  <div className="close-button" onClick={() => {
                    setIsButtonClicked((prevState) => ({
                      ...prevState,
                      isGeneralButton: false,
                      isCustomerButton: false,
                      isFolderButton: false,
                      custButMsg1: false,
                      custButMsg2: false,
                      custButMsg3: false,
                      custButMsg4: false,
                      custButMsg5: false,
                      custButMsg6: false,
                      custButMsg7: false,
                      isToolButton: false,
                      isContactCardButton: false,
                      isLetsTodoButton: false,
                      isExpensesButton: false,
                      isConverterbutton: false,
                      isValidatorButton: false,
                    }))
                    setIsActive((prevState) => ({ ...prevState, hsc: false }))
                  }

                  }
                  >
                    <BsArrowLeftShort />
                  </div>
                  <div class="img-text">
                    <h4>HSC Student<br /></h4>
                    <p>Online</p>
                  </div>

                  <div>
                    <span className="desktop-online">Online</span>
                  </div>
                </div >

                <div className='chat-container' id="chat-container">
                  <div className="message-box friend-message">
                    <p>How To Use HSC Student ChatWithFolder On Whatsapp!</p><br />
                  </div>
                  {/* <button class="button-64" role="button"><span class="text">Folder</span></button> */}
                  {/* <button className="click-me"><BsFillFolderFill className='icon' />Folder</button> */}
                  <button className="message-button" id="message-button" style={{ backgroundColor: isButtonClicked.isFolderButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isFolderButton: !isButtonClicked.isFolderButton, isToolButton: false, isGeneralButton: false, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false, isContactCardButton: false, isLetsTodoButton: false, isConverterbutton: false, isExpensesButton: false, isValidatorButton: false }))}><BsFillFolderFill className='icon' />Folder</button>

                  {
                    isButtonClicked.isFolderButton && (
                      <>
                        <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isGeneralButton: !isButtonClicked.isGeneralButton, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Gernal Folder</button>
                        <button id="custome-folder" style={{ backgroundColor: isButtonClicked.isCustomerButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} className="custome-folder" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isCustomerButton: !isButtonClicked.isCustomerButton, isGeneralButton: false }))}>Custome Folder</button>
                        {/* <div id="general-folder-message" class="general-folder-message my-message message-box"> */}
                        <>
                          {
                            isButtonClicked.isGeneralButton && (
                              <div id="general-folder-message" class="general-folder-message my-message message-box">
                                <p>
                                  <img src={img2} alt="" />
                                  The General Folder serves as a centralized hub for all your files, documents, and resources. It's designed to help you keep everything organized and easily accessible in one place. Whether it's personal files, work-related documents, or miscellaneous materials, the General Folder is where you can store them all
                                </p>
                              </div>
                            )
                          }

                          {
                            isButtonClicked.isCustomerButton && (
                              <>
                                <div id="cusotme-folder-message-new-0" style={{ display: isButtonClicked.custButMsg1 || isButtonClicked.custButMsg2 || isButtonClicked.custButMsg3 || isButtonClicked.custButMsg4 || isButtonClicked.custButMsg5 || isButtonClicked.custButMsg6 || isButtonClicked.custButMsg7 ? "none" : "block" }} class="my-message  message-box">
                                  <p>
                                    <img src={img1} alt="" />
                                    Custom Folders allow you to further organize your files based on your specific needs. You can create folders with names that make sense to you, helping you categorize and manage your documents effectively.
                                  </p>
                                </div>
                                <button id="cusotme-folder-message-new-1" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: true, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>My Health Records</button>
                                {
                                  (isButtonClicked.custButMsg1 && isButtonClicked.isCustomerButton) && (
                                    <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                      <p>
                                        <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                        <b>My Health Records</b><br />
                                        Store your health-related documents, medical records, and information related to your well-being here<br />
                                      </p>
                                    </div>
                                  )
                                }
                                <button id="cusotme-folder-message-new-2" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: true, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Studies Economics</button>

                                {
                                  isButtonClicked.custButMsg2 && (
                                    <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                      <p>
                                        <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                        <b>Studies Economics</b> <br /> Ideal for academic materials, textbooks, research papers, and notes related to economics
                                      </p>
                                    </div>
                                  )
                                }
                                <button id="cusotme-folder-message-new-3" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: true, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Studies Physics</button>
                                {
                                  isButtonClicked.custButMsg3 && (
                                    <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                      <p>
                                        <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                        <b>Studies Physics</b> <br />Use this folder for organizing your physics-related study materials, including lecture notes and reference materials.
                                      </p>
                                    </div>
                                  )
                                }
                                <button id="cusotme-folder-message-new-4" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: true, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Contracts</button>
                                {
                                  isButtonClicked.custButMsg4 && (
                                    <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                      <p>
                                        <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                        <b>Contracts</b> <br /> Keep all your contract documents, agreements, and legal paperwork neatly organized in this folder.
                                      </p>
                                    </div>
                                  )
                                }
                                <button id="cusotme-folder-message-new-5" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: true, custButMsg6: false, custButMsg7: false }))}>Knowledge</button>
                                {
                                  isButtonClicked.custButMsg5 && (
                                    <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                      <p>
                                        <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                        <b>Knowledge</b> <br />Use this folder to store informational resources, articles, and reference materials that you find valuable.
                                      </p>
                                    </div>
                                  )
                                }
                                <button id="cusotme-folder-message-new-6" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: true, custButMsg7: false }))}>Time Table</button>
                                {
                                  isButtonClicked.custButMsg6 && (
                                    <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                      <p>
                                        <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />
                                        <b>Time Table</b> <br />Time TableOrganize your schedules, timetables, and event plans to stay on top of your commitments.
                                      </p>
                                    </div>
                                  )
                                }
                                <button id="cusotme-folder-message-new-7" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: true }))}>Projects</button>

                                {
                                  isButtonClicked.custButMsg7 && (
                                    <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                      <p>
                                        <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />
                                        <b>Projects</b> <br />For managing project-related files, including plans, reports, and collaboration documents.
                                      </p>
                                    </div>
                                  )
                                }

                              </>
                            )
                          }
                        </>
                      </>
                    )
                  }
                  <button className="message-button" id="message-button" style={{ backgroundColor: isButtonClicked.isToolButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isToolButton: !isButtonClicked.isToolButton, isFolderButton: false, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false, isContactCardButton: false, isLetsTodoButton: false, isConverterbutton: false, isExpensesButton: false, isValidatorButton: false }))}><FaTools />Tools</button>

                  {
                    isButtonClicked.isToolButton && (
                      <>
                        <div id="cusotme-folder-message-new-0" style={{ display: isButtonClicked.isContactCardButton || isButtonClicked.isLetsTodoButton || isButtonClicked.isExpensesButton || isButtonClicked.isConverterbutton || isButtonClicked.isValidatorButton ? "none" : "block" }} class="my-message  message-box">
                          <p>
                            Tool helps empower users to streamline contact management, task organization, expense tracking, file conversion, and content validation for enhanced productivity and efficiency
                          </p>
                        </div>
                        <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: true, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: false, isValidatorButton: false }))}>Contact Card</button>
                        {
                          isButtonClicked.isContactCardButton && (

                            <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                              <p>
                                <>
                                  <b>Contact Card</b><br />
                                  Upload pic anything with a contact number,address,etc get a contact card and store in your side brain
                                </>

                              </p>
                            </div>
                          )
                        }
                        <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: true, isExpensesButton: false, isConverterbutton: false, isValidatorButton: false }))}>lets Todo</button>
                        {
                          isButtonClicked.isLetsTodoButton && (

                            <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                              <p>
                                <>
                                  <b>Lets Todo</b><br />
                                  Add,Remove,Update,Get Reminded and more.
                                </>
                              </p>
                            </div>
                          )

                        }
                        <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: true, isConverterbutton: false, isValidatorButton: false }))}>Expenses</button>
                        {
                          isButtonClicked.isExpensesButton && (

                            <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                              <p>
                                <>
                                  <b>Expenses</b><br />
                                  Store pics of any bills anytype wherever amount is mentioned for warranty check,extract, asset tracking and more
                                </>
                              </p>
                            </div>
                          )

                        }
                        <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: true, isValidatorButton: false }))}>Converter</button>
                        {
                          isButtonClicked.isConverterbutton && (

                            <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                              <p>
                                <>
                                  <b>Converter</b><br />
                                  Convert your files from ppt to pdf,doc to pdf and more
                                </>
                              </p>
                            </div>
                          )

                        }
                        <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: false, isValidatorButton: true }))}>Validator</button>
                        {
                          isButtonClicked.isValidatorButton && (

                            <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                              <p>
                                <>
                                  <b>Validator</b><br />
                                  Upload pic of case,question and get relevant content from Folders
                                </>
                              </p>
                            </div>
                          )

                        }
                      </>
                    )
                  }



                </div >
              </>
              :
              isActive.mba ?
                <>
                  <div class="header">
                    <div className="close-button" onClick={() => {
                      setIsButtonClicked((prevState) => ({
                        ...prevState,
                        isGeneralButton: false,
                        isCustomerButton: false,
                        isFolderButton: false,
                        custButMsg1: false,
                        custButMsg2: false,
                        custButMsg3: false,
                        custButMsg4: false,
                        custButMsg5: false,
                        custButMsg6: false,
                        custButMsg7: false,
                        isToolButton: false,
                        isContactCardButton: false,
                        isLetsTodoButton: false,
                        isExpensesButton: false,
                        isConverterbutton: false,
                        isValidatorButton: false,
                      }))
                      setIsActive((prevState) => ({ ...prevState, mba: false }))
                    }
                    }
                    >
                      <BsArrowLeftShort />
                    </div>
                    <div class="img-text">
                      <h4>MBA Student<br /></h4>
                      <p>Online</p>
                    </div>

                    <div>
                      <span className="desktop-online">Online</span>
                    </div>
                  </div>
                  <div className="chat-container" id="chat-container">
                    <div className="message-box friend-message">
                      <p>How To Use MBA Student ChatWithFolder On Whatsapp!</p><br />
                    </div>
                    <button className="message-button" id="message-button" style={{ backgroundColor: isButtonClicked.isFolderButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isFolderButton: !isButtonClicked.isFolderButton, isToolButton: false, isGeneralButton: false, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false, isContactCardButton: false, isLetsTodoButton: false, isConverterbutton: false, isExpensesButton: false, isValidatorButton: false }))}><BsFillFolderFill className='icon' />Folder</button>
                    {
                      isButtonClicked.isFolderButton && (
                        <>
                          <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isGeneralButton: !isButtonClicked.isGeneralButton, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Gernal Folder</button>
                          <button id="custome-folder" style={{ backgroundColor: isButtonClicked.isCustomerButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} className="custome-folder" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isCustomerButton: !isButtonClicked.isCustomerButton, isGeneralButton: false }))}>Custome Folder</button>
                          {/* <div id="general-folder-message" class="general-folder-message my-message message-box"> */}
                          <>
                            {
                              isButtonClicked.isGeneralButton && (
                                <div id="general-folder-message" class="general-folder-message my-message message-box">
                                  <p>
                                    <img src={img2} alt="" />
                                    The General Folder serves as a centralized hub for all your files, documents, and resources. It's designed to help you keep everything organized and easily accessible in one place. Whether it's personal files, work-related documents, or miscellaneous materials, the General Folder is where you can store them all
                                  </p>
                                </div>
                              )
                            }

                            {
                              isButtonClicked.isCustomerButton && (
                                <>
                                  <div id="cusotme-folder-message-new-0" style={{ display: isButtonClicked.custButMsg1 || isButtonClicked.custButMsg2 || isButtonClicked.custButMsg3 || isButtonClicked.custButMsg4 || isButtonClicked.custButMsg5 || isButtonClicked.custButMsg6 || isButtonClicked.custButMsg7 ? "none" : "block" }} class="my-message  message-box">
                                    <p>
                                      <img src={img1} alt="" />
                                      Custom Folders allow you to further organize your files based on your specific needs. You can create folders with names that make sense to you, helping you categorize and manage your documents effectively.
                                    </p>
                                  </div>
                                  <button id="cusotme-folder-message-new-1" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: true, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>My Health Records</button>
                                  {
                                    (isButtonClicked.custButMsg1 && isButtonClicked.isCustomerButton) && (
                                      <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                        <p>
                                          <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                          <b>My Health Records</b><br />
                                          Store your health-related documents, medical records, and information related to your well-being here
                                        </p>
                                      </div>
                                    )
                                  }
                                  <button id="cusotme-folder-message-new-2" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: true, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Studies Economics</button>
                                  {
                                    isButtonClicked.custButMsg2 && (
                                      <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                        <p>
                                          <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                          <b>Studies Economics</b> <br /> Ideal for academic materials, textbooks, research papers, and notes related to economics
                                        </p>
                                      </div>
                                    )
                                  }
                                  <button id="cusotme-folder-message-new-3" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: true, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Studies Physics</button>
                                  {
                                    isButtonClicked.custButMsg3 && (
                                      <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                        <p>
                                          <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                          <b>Studies Physics</b> <br />Use this folder for organizing your physics-related study materials, including lecture notes and reference materials.
                                        </p>
                                      </div>
                                    )
                                  }
                                  <button id="cusotme-folder-message-new-4" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: true, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Contracts</button>
                                  {
                                    isButtonClicked.custButMsg4 && (
                                      <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                        <p>
                                          <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                          <b>Contracts</b> <br /> Keep all your contract documents, agreements, and legal paperwork neatly organized in this folder.
                                        </p>
                                      </div>
                                    )
                                  }
                                  <button id="cusotme-folder-message-new-5" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: true, custButMsg6: false, custButMsg7: false }))}>Knowledge</button>
                                  {
                                    isButtonClicked.custButMsg5 && (
                                      <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                        <p>
                                          <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                          <b>Knowledge</b> <br />Use this folder to store informational resources, articles, and reference materials that you find valuable.
                                        </p>
                                      </div>
                                    )
                                  }
                                  <button id="cusotme-folder-message-new-6" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: true, custButMsg7: false }))}>Time Table</button>
                                  {
                                    isButtonClicked.custButMsg6 && (
                                      <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                        <p>
                                          <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />
                                          <b>Time Table</b> <br />Time TableOrganize your schedules, timetables, and event plans to stay on top of your commitments.
                                        </p>
                                      </div>
                                    )
                                  }
                                  <button id="cusotme-folder-message-new-7" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: true }))}>Projects</button>
                                  {
                                    isButtonClicked.custButMsg7 && (
                                      <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                        <p>
                                          <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                          <b>Projects</b> <br />For managing project-related files, including plans, reports, and collaboration documents.
                                        </p>
                                      </div>
                                    )
                                  }
                                </>
                              )
                            }
                          </>
                        </>
                      )
                    }

                    <button className="message-button" id="message-button" style={{ backgroundColor: isButtonClicked.isToolButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isToolButton: !isButtonClicked.isToolButton, isFolderButton: false, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false, isContactCardButton: false, isLetsTodoButton: false, isConverterbutton: false, isExpensesButton: false, isValidatorButton: false }))}><FaTools />Tools</button>


                    {
                      isButtonClicked.isToolButton && (
                        <>
                          <div id="cusotme-folder-message-new-0" style={{ display: isButtonClicked.isContactCardButton || isButtonClicked.isLetsTodoButton || isButtonClicked.isExpensesButton || isButtonClicked.isConverterbutton || isButtonClicked.isValidatorButton ? "none" : "block" }} class="my-message  message-box">
                            <p>
                              Tool helps empower users to streamline contact management, task organization, expense tracking, file conversion, and content validation for enhanced productivity and efficiency
                            </p>
                          </div>
                          <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: true, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: false, isValidatorButton: false }))}>Contact Card</button>
                          {
                            isButtonClicked.isContactCardButton && (
                              <div class="my-message  message-box  sub-tool-msg-class" id="sub-msg-id1">
                                <p>
                                  <>
                                    <b>Contact Cards</b><br />
                                    Upload pic anything with a contact number,address,etc get a contact card and store in your side brain
                                  </>
                                </p>
                              </div>
                            )
                          }
                          <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: true, isExpensesButton: false, isConverterbutton: false, isValidatorButton: false }))}>lets Todo</button>
                          {

                            isButtonClicked.isLetsTodoButton && (

                              <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                <p>
                                  <>
                                    <b>Lets Todo</b><br />
                                    Add,Remove,Update,Get Reminded and more.
                                  </>
                                </p>
                              </div>
                            )

                          }
                          <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: true, isConverterbutton: false, isValidatorButton: false }))}>Expenses</button>
                          {
                            isButtonClicked.isExpensesButton && (

                              <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                <p>
                                  <>
                                    <b>Expenses</b><br />
                                    Store pics of any bills anytype wherever amount is mentioned for warranty check,extract, asset tracking and more
                                  </>
                                </p>
                              </div>
                            )

                          }
                          <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: true, isValidatorButton: false }))}>Converter</button>
                          {
                            isButtonClicked.isConverterbutton && (

                              <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                <p>
                                  <>
                                    <b>Converter</b><br />
                                    Convert your files from ppt to pdf,doc to pdf and more
                                  </>
                                </p>
                              </div>
                            )

                          }
                          <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: false, isValidatorButton: true }))}>Validator</button>
                          {
                            isButtonClicked.isValidatorButton && (

                              <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                <p>
                                  <>
                                    <b>Validator</b><br />
                                    Upload pic of case,question and get relevant content from Folders
                                  </>
                                </p>
                              </div>
                            )
                          }
                          <div class="my-message  message-box  sub-msg-class" id="sub-msg-id1">
                          </div>

                        </>
                      )
                    }


                  </div>
                </>
                :
                isActive.ca ?
                  <>
                    <div class="header">
                      <div className="close-button" onClick={() => {
                        setIsButtonClicked((prevState) => ({
                          ...prevState,
                          isGeneralButton: false,
                          isCustomerButton: false,
                          isFolderButton: false,
                          custButMsg1: false,
                          custButMsg2: false,
                          custButMsg3: false,
                          custButMsg4: false,
                          custButMsg5: false,
                          custButMsg6: false,
                          custButMsg7: false,
                          isToolButton: false,
                          isContactCardButton: false,
                          isLetsTodoButton: false,
                          isExpensesButton: false,
                          isConverterbutton: false,
                          isValidatorButton: false,
                        }))
                        setIsActive((prevState) => ({ ...prevState, ca: false }))
                      }

                      }
                      >
                        <BsArrowLeftShort />
                      </div>
                      <div class="img-text">
                        <h4>CA Student<br /></h4>
                        <p>Online</p>
                      </div>

                      <div>
                        <span className="desktop-online">Online</span>
                      </div>

                    </div>
                    <div className="chat-container" id="chat-container">
                      <div className="message-box friend-message">
                        <p>How To Use CA Student ChatWithFolder On Whatsapp!</p><br />
                      </div>
                      <button className="message-button" id="message-button" style={{ backgroundColor: isButtonClicked.isFolderButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isFolderButton: !isButtonClicked.isFolderButton, isToolButton: false, isGeneralButton: false, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false, isContactCardButton: false, isLetsTodoButton: false, isConverterbutton: false, isExpensesButton: false, isValidatorButton: false }))}><BsFillFolderFill className='icon' />Folder</button>
                      {
                        isButtonClicked.isFolderButton && (
                          <>
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isGeneralButton: !isButtonClicked.isGeneralButton, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Gernal Folder</button>
                            <button id="custome-folder" style={{ backgroundColor: isButtonClicked.isCustomerButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} className="custome-folder" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isCustomerButton: !isButtonClicked.isCustomerButton, isGeneralButton: false }))}>Custome Folder</button>
                            {/* <div id="general-folder-message" class="general-folder-message my-message message-box"> */}
                            <>
                              {
                                isButtonClicked.isGeneralButton && (
                                  <div id="general-folder-message" class="general-folder-message my-message message-box">
                                    <p>
                                      <img src={img2} alt="" />
                                      The General Folder serves as a centralized hub for all your files, documents, and resources. It's designed to help you keep everything organized and easily accessible in one place. Whether it's personal files, work-related documents, or miscellaneous materials, the General Folder is where you can store them all
                                    </p>
                                  </div>
                                )
                              }

                              {
                                isButtonClicked.isCustomerButton && (
                                  <>
                                    <div id="cusotme-folder-message-new-0" style={{ display: isButtonClicked.custButMsg1 || isButtonClicked.custButMsg2 || isButtonClicked.custButMsg3 || isButtonClicked.custButMsg4 || isButtonClicked.custButMsg5 || isButtonClicked.custButMsg6 || isButtonClicked.custButMsg7 ? "none" : "block" }} class="my-message  message-box">
                                      <p>
                                        <img src={img1} alt="" />
                                        Custom Folders allow you to further organize your files based on your specific needs. You can create folders with names that make sense to you, helping you categorize and manage your documents effectively.
                                      </p>
                                    </div>
                                    <button id="cusotme-folder-message-new-1" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: true, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>My Health Records</button>
                                    {
                                      (isButtonClicked.custButMsg1 && isButtonClicked.isCustomerButton) && (
                                        <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                          <p>
                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                            <b>My Health Records</b><br />
                                            Store your health-related documents, medical records, and information related to your well-being here
                                          </p>
                                        </div>
                                      )
                                    }
                                    <button id="cusotme-folder-message-new-2" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: true, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Studies Economics</button>
                                    {
                                      isButtonClicked.custButMsg2 && (
                                        <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                          <p>
                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                            <b>Studies Economics</b> <br /> Ideal for academic materials, textbooks, research papers, and notes related to economics
                                          </p>
                                        </div>
                                      )
                                    }
                                    <button id="cusotme-folder-message-new-3" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: true, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Studies Physics</button>
                                    {
                                      isButtonClicked.custButMsg3 && (
                                        <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                          <p>
                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                            <b>Studies Physics</b> <br />Use this folder for organizing your physics-related study materials, including lecture notes and reference materials.
                                          </p>
                                        </div>
                                      )
                                    }
                                    <button id="cusotme-folder-message-new-4" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: true, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Contracts</button>
                                    {
                                      isButtonClicked.custButMsg4 && (
                                        <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                          <p>
                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                            <b>Contracts</b> <br /> Keep all your contract documents, agreements, and legal paperwork neatly organized in this folder.
                                          </p>
                                        </div>
                                      )
                                    }
                                    <button id="cusotme-folder-message-new-5" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: true, custButMsg6: false, custButMsg7: false }))}>Knowledge</button>
                                    {
                                      isButtonClicked.custButMsg5 && (
                                        <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                          <p>
                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                            <b>Knowledge</b> <br />Use this folder to store informational resources, articles, and reference materials that you find valuable.
                                          </p>
                                        </div>
                                      )
                                    }
                                    <button id="cusotme-folder-message-new-6" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: true, custButMsg7: false }))}>Time Table</button>
                                    {
                                      isButtonClicked.custButMsg6 && (
                                        <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                          <p>
                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />
                                            <b>Time Table</b> <br />Time TableOrganize your schedules, timetables, and event plans to stay on top of your commitments.
                                          </p>
                                        </div>
                                      )
                                    }
                                    <button id="cusotme-folder-message-new-7" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: true }))}>Projects</button>
                                    {
                                      isButtonClicked.custButMsg7 && (
                                        <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                          <p>
                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                            <b>Projects</b> <br />For managing project-related files, including plans, reports, and collaboration documents.
                                          </p>
                                        </div>
                                      )
                                    }
                                  </>
                                )
                              }
                            </>
                          </>
                        )
                      }
                      <button className="message-button" id="message-button" style={{ backgroundColor: isButtonClicked.isToolButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isToolButton: !isButtonClicked.isToolButton, isFolderButton: false, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false, isContactCardButton: false, isLetsTodoButton: false, isConverterbutton: false, isExpensesButton: false, isValidatorButton: false }))}><FaTools />Tools</button>

                      {
                        isButtonClicked.isToolButton && (
                          <>
                            <div id="cusotme-folder-message-new-0" style={{ display: isButtonClicked.isContactCardButton || isButtonClicked.isLetsTodoButton || isButtonClicked.isExpensesButton || isButtonClicked.isConverterbutton || isButtonClicked.isValidatorButton ? "none" : "block" }} class="my-message  message-box">
                              <p>
                                Tool helps empower users to streamline contact management, task organization, expense tracking, file conversion, and content validation for enhanced productivity and efficiency
                              </p>
                            </div>
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: true, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: false, isValidatorButton: false }))}>Contact Card</button>
                            {
                              isButtonClicked.isContactCardButton && (

                                <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                  <p>
                                    <>
                                      <b>Contact Card</b><br />
                                      Upload pic anything with a contact number,address,etc get a contact card and store in your side brain
                                    </>

                                  </p>
                                </div>
                              )
                            }
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: true, isExpensesButton: false, isConverterbutton: false, isValidatorButton: false }))}>lets Todo</button>
                            {
                              isButtonClicked.isLetsTodoButton && (

                                <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                  <p>
                                    <>
                                      <b>Lets Todo</b><br />
                                      Add,Remove,Update,Get Reminded and more.
                                    </>
                                  </p>
                                </div>
                              )

                            }
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: true, isConverterbutton: false, isValidatorButton: false }))}>Expenses</button>
                            {
                              isButtonClicked.isExpensesButton && (

                                <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                  <p>
                                    <>
                                      <b>Expenses</b><br />
                                      Store pics of any bills anytype wherever amount is mentioned for warranty check,extract, asset tracking and more
                                    </>
                                  </p>
                                </div>
                              )

                            }
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: true, isValidatorButton: false }))}>Converter</button>
                            {
                              isButtonClicked.isConverterbutton && (

                                <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                  <p>
                                    <>
                                      <b>Converter</b><br />
                                      Convert your files from ppt to pdf,doc to pdf and more
                                    </>
                                  </p>
                                </div>
                              )

                            }
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: false, isValidatorButton: true }))}>Validator</button>
                            {
                              isButtonClicked.isValidatorButton && (

                                <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                  <p>
                                    <>
                                      <b>Validator</b><br />
                                      Upload pic of case,question and get relevant content from Folders
                                    </>
                                  </p>
                                </div>
                              )

                            }
                          </>
                        )
                      }


                    </div>
                  </>
                  :
                  isActive.reas ?
                    <>
                      <div class="header">
                        <div className="close-button" onClick={() => {
                          setIsButtonClicked((prevState) => ({
                            ...prevState,
                            isGeneralButton: false,
                            isCustomerButton: false,
                            isFolderButton: false,
                            custButMsg1: false,
                            custButMsg2: false,
                            custButMsg3: false,
                            custButMsg4: false,
                            custButMsg5: false,
                            custButMsg6: false,
                            custButMsg7: false,
                            isToolButton: false,
                            isContactCardButton: false,
                            isLetsTodoButton: false,
                            isExpensesButton: false,
                            isConverterbutton: false,
                            isValidatorButton: false,
                          }))
                          setIsActive((prevState) => ({ ...prevState, reas: false }))
                        }
                        }
                        >
                          <BsArrowLeftShort />
                        </div>
                        <div class="img-text">
                          <h4>Reasearch Student<br /></h4>
                          <p>Online</p>
                        </div>

                        <div>
                          <span className="desktop-online">Online</span>
                        </div>
                      </div>
                      <div className="chat-container" id="chat-container">
                        <div className="message-box friend-message">
                          <p>How To Use REASEARCH Student ChatWithFolder On Whatsapp!</p><br />
                        </div>
                        <button className="message-button" id="message-button" style={{ backgroundColor: isButtonClicked.isFolderButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isFolderButton: !isButtonClicked.isFolderButton, isToolButton: false, isGeneralButton: false, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false, isContactCardButton: false, isLetsTodoButton: false, isConverterbutton: false, isExpensesButton: false, isValidatorButton: false }))}><BsFillFolderFill className='icon' />Folder</button>
                        {
                          isButtonClicked.isFolderButton && (
                            <>
                              <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isGeneralButton: !isButtonClicked.isGeneralButton, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Gernal Folder</button>
                              <button id="custome-folder" style={{ backgroundColor: isButtonClicked.isCustomerButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} className="custome-folder" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isCustomerButton: !isButtonClicked.isCustomerButton, isGeneralButton: false }))}>Custome Folder</button>
                              {/* <div id="general-folder-message" class="general-folder-message my-message message-box"> */}
                              <>
                                {
                                  isButtonClicked.isGeneralButton && (
                                    <div id="general-folder-message" class="general-folder-message my-message message-box">
                                      <p>
                                        <img src={img2} alt="" />
                                        The General Folder serves as a centralized hub for all your files, documents, and resources. It's designed to help you keep everything organized and easily accessible in one place. Whether it's personal files, work-related documents, or miscellaneous materials, the General Folder is where you can store them all
                                      </p>
                                    </div>
                                  )
                                }

                                {
                                  isButtonClicked.isCustomerButton && (
                                    <>
                                      <div id="cusotme-folder-message-new-0" style={{ display: isButtonClicked.custButMsg1 || isButtonClicked.custButMsg2 || isButtonClicked.custButMsg3 || isButtonClicked.custButMsg4 || isButtonClicked.custButMsg5 || isButtonClicked.custButMsg6 || isButtonClicked.custButMsg7 ? "none" : "block" }} class="my-message  message-box">
                                        <p>
                                          <img src={img1} alt="" />
                                          Custom Folders allow you to further organize your files based on your specific needs. You can create folders with names that make sense to you, helping you categorize and manage your documents effectively.
                                        </p>
                                      </div>
                                      <button id="cusotme-folder-message-new-1" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: true, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>My Health Records</button>
                                      {
                                        (isButtonClicked.custButMsg1 && isButtonClicked.isCustomerButton) && (
                                          <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                            <p>
                                              <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                              <b>My Health Records</b><br />
                                              Store your health-related documents, medical records, and information related to your well-being here
                                            </p>
                                          </div>
                                        )
                                      }
                                      <button id="cusotme-folder-message-new-2" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: true, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Studies Economics</button>
                                      {
                                        isButtonClicked.custButMsg2 && (
                                          <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                            <p>
                                              <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                              <b>Studies Economics</b> <br /> Ideal for academic materials, textbooks, research papers, and notes related to economics
                                            </p>
                                          </div>
                                        )
                                      }
                                      <button id="cusotme-folder-message-new-3" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: true, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Studies Physics</button>
                                      {
                                        isButtonClicked.custButMsg3 && (
                                          <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                            <p>
                                              <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                              <b>Studies Physics</b> <br />Use this folder for organizing your physics-related study materials, including lecture notes and reference materials.
                                            </p>
                                          </div>
                                        )
                                      }
                                      <button id="cusotme-folder-message-new-4" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: true, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Contracts</button>
                                      {
                                        isButtonClicked.custButMsg4 && (
                                          <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                            <p>
                                              <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                              <b>Contracts</b> <br /> Keep all your contract documents, agreements, and legal paperwork neatly organized in this folder.
                                            </p>
                                          </div>
                                        )
                                      }
                                      <button id="cusotme-folder-message-new-5" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: true, custButMsg6: false, custButMsg7: false }))}>Knowledge</button>
                                      {
                                        isButtonClicked.custButMsg5 && (
                                          <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                            <p>
                                              <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                              <b>Knowledge</b> <br />Use this folder to store informational resources, articles, and reference materials that you find valuable.
                                            </p>
                                          </div>
                                        )
                                      }
                                      <button id="cusotme-folder-message-new-6" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: true, custButMsg7: false }))}>Time Table</button>
                                      {
                                        isButtonClicked.custButMsg6 && (
                                          <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                            <p>
                                              <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />
                                              <b>Time Table</b> <br />Time TableOrganize your schedules, timetables, and event plans to stay on top of your commitments.
                                            </p>
                                          </div>
                                        )
                                      }
                                      <button id="cusotme-folder-message-new-7" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: true }))}>Projects</button>
                                      {
                                        isButtonClicked.custButMsg7 && (
                                          <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                            <p>
                                              <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                              <b>Projects</b> <br />For managing project-related files, including plans, reports, and collaboration documents.
                                            </p>
                                          </div>
                                        )
                                      }
                                    </>
                                  )
                                }
                              </>
                            </>
                          )
                        }
                        <button className="message-button" id="message-button" style={{ backgroundColor: isButtonClicked.isToolButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isToolButton: !isButtonClicked.isToolButton, isFolderButton: false, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false, isContactCardButton: false, isLetsTodoButton: false, isConverterbutton: false, isExpensesButton: false, isValidatorButton: false }))}><FaTools />Tools</button>

                        {
                          isButtonClicked.isToolButton && (
                            <>
                              <div id="cusotme-folder-message-new-0" style={{ display: isButtonClicked.isContactCardButton || isButtonClicked.isLetsTodoButton || isButtonClicked.isExpensesButton || isButtonClicked.isConverterbutton || isButtonClicked.isValidatorButton ? "none" : "block" }} class="my-message  message-box">
                                <p>
                                  Tool helps empower users to streamline contact management, task organization, expense tracking, file conversion, and content validation for enhanced productivity and efficiency
                                </p>
                              </div>
                              <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: true, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: false, isValidatorButton: false }))}>Contact Card</button>
                              {
                                isButtonClicked.isContactCardButton && (
                                  <div class="my-message  message-box  sub-tool-msg-class" id="sub-msg-id1">
                                    <p>
                                      <>
                                        <b>Contact Cards</b><br />
                                        Upload pic anything with a contact number,address,etc get a contact card and store in your side brain
                                      </>
                                    </p>
                                  </div>
                                )
                              }
                              <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: true, isExpensesButton: false, isConverterbutton: false, isValidatorButton: false }))}>lets Todo</button>
                              {

                                isButtonClicked.isLetsTodoButton && (

                                  <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                    <p>
                                      <>
                                        <b>Lets Todo</b><br />
                                        Add,Remove,Update,Get Reminded and more.
                                      </>
                                    </p>
                                  </div>
                                )

                              }
                              <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: true, isConverterbutton: false, isValidatorButton: false }))}>Expenses</button>
                              {
                                isButtonClicked.isExpensesButton && (

                                  <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                    <p>
                                      <>
                                        <b>Expenses</b><br />
                                        Store pics of any bills anytype wherever amount is mentioned for warranty check,extract, asset tracking and more
                                      </>
                                    </p>
                                  </div>
                                )

                              }
                              <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: true, isValidatorButton: false }))}>Converter</button>
                              {
                                isButtonClicked.isConverterbutton && (

                                  <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                    <p>
                                      <>
                                        <b>Converter</b><br />
                                        Convert your files from ppt to pdf,doc to pdf and more
                                      </>
                                    </p>
                                  </div>
                                )

                              }
                              <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: false, isValidatorButton: true }))}>Validator</button>
                              {
                                isButtonClicked.isValidatorButton && (

                                  <div class="my-message  message-box sub-tool-msg-class" id="sub-msg-id1">
                                    <p>
                                      <>
                                        <b>Validator</b><br />
                                        Upload pic of case,question and get relevant content from Folders
                                      </>
                                    </p>
                                  </div>
                                )
                              }
                              <div class="my-message  message-box  sub-msg-class" id="sub-msg-id1">
                              </div>

                            </>
                          )
                        }


                      </div>
                    </>
                    : null
          }
        </div>
      </div>
    </body >
  );
}

export default App;
