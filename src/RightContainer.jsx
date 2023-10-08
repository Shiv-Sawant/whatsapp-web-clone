import React, { useState } from 'react'
import { BsFillFolderFill } from 'react-icons/bs'
import { FaTools } from 'react-icons/fa'
import img1 from './assets/custome.png'
import img2 from './assets/general.png'
import { setClose } from './App'

const RightContainer = ({ isActive, setIsActive }) => {
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
    var close = false
    const handleClose = () => {
    }

    console.log(isButtonClicked)
    console.log(close, "close")
    return (
        <>
            {/* <div className='right-container' style={{position:closeChat?'relative':'absolute'}}> */}
            <div class="header">
                <div onClick={() => handleClose()}>
                    back
                </div>
                <div class="img-text">
                    <h4>HSC Student<br /><span>Online</span></h4>
                </div>
            </div >

            <div className='chat-container' id="chat-container">
                <div className="message-box friend-message">
                    <p>How To Use HSC Student ChatWithFolder On Whatsapp!</p><br />
                </div>
                <button className="message-button" id="message-button" style={{ backgroundColor: isButtonClicked.isFolderButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isFolderButton: !isButtonClicked.isFolderButton, isToolButton: false, isGeneralButton: false, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false, isContactCardButton: false, isLetsTodoButton: false, isConverterbutton: false, isExpensesButton: false, isValidatorButton: false }))}><BsFillFolderFill className='icon' />Folder</button>
                <button className="message-button" id="message-button" style={{ backgroundColor: isButtonClicked.isToolButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isToolButton: !isButtonClicked.isToolButton, isFolderButton: false, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false, isContactCardButton: false, isLetsTodoButton: false, isConverterbutton: false, isExpensesButton: false, isValidatorButton: false }))}><FaTools />Tools</button>

                {
                    isButtonClicked.isToolButton && (
                        <>
                            <div id="cusotme-folder-message-new-0" class="my-message  message-box">
                                <p>
                                    Tool helps empower users to streamline contact management, task organization, expense tracking, file conversion, and content validation for enhanced productivity and efficiency
                                </p>
                            </div>
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: true, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: false, isValidatorButton: false }))}>Contact Card</button>
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: true, isExpensesButton: false, isConverterbutton: false, isValidatorButton: false }))}>lets Todo</button>
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: true, isConverterbutton: false, isValidatorButton: false }))}>Expenses</button>
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: true, isValidatorButton: false }))}>Converter</button>
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isContactCardButton: false, isLetsTodoButton: false, isExpensesButton: false, isConverterbutton: false, isValidatorButton: true }))}>Validator</button>

                            <>
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
                        </>
                    )
                }

                {
                    isButtonClicked.isFolderButton && (
                        <>
                            <button id="general-folder" className="general-folder message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isGeneralButton: true, isCustomerButton: false, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Gernal Folder</button>
                            <button id="custome-folder" style={{ backgroundColor: isButtonClicked.isCustomerButton ? "rgb(244, 195, 19)" : "rgb(248, 209, 74)" }} className="custome-folder" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, isCustomerButton: true, isGeneralButton: false }))}>Custome Folder</button>
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
                                            <div id="cusotme-folder-message-new-0" class="my-message  message-box">
                                                <p>
                                                    <img src={img1} alt="" />
                                                    Custom Folders allow you to further organize your files based on your specific needs. You can create folders with names that make sense to you, helping you categorize and manage your documents effectively.
                                                </p>
                                            </div>
                                            <button id="cusotme-folder-message-new-1" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: true, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>My Health Records</button>
                                            <button id="cusotme-folder-message-new-2" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: true, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Studies Economics</button>
                                            <button id="cusotme-folder-message-new-3" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: true, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Studies Physics</button>
                                            <button id="cusotme-folder-message-new-4" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: true, custButMsg5: false, custButMsg6: false, custButMsg7: false }))}>Contracts</button>
                                            <button id="cusotme-folder-message-new-5" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: true, custButMsg6: false, custButMsg7: false }))}>Knowledge</button>
                                            <button id="cusotme-folder-message-new-6" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: true, custButMsg7: false }))}>Time Table</button>
                                            <button id="cusotme-folder-message-new-7" class="cusotme-folder-message  message-box" onClick={() => setIsButtonClicked((prevState) => ({ ...prevState, custButMsg1: false, custButMsg2: false, custButMsg3: false, custButMsg4: false, custButMsg5: false, custButMsg6: false, custButMsg7: true }))}>Projects</button>
                                            <div class="my-message  message-box sub-msg-class" id="sub-msg-id1">
                                                {
                                                    (isButtonClicked.custButMsg1 && isButtonClicked.isCustomerButton) && (
                                                        <p>
                                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                                            <b>My Health Records</b><br />
                                                            Store your health-related documents, medical records, and information related to your well-being here
                                                        </p>
                                                    )
                                                }

                                                {
                                                    isButtonClicked.custButMsg2 && (
                                                        <p>
                                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                                            <b>Studies Economics</b> <br /> Ideal for academic materials, textbooks, research papers, and notes related to economics
                                                        </p>
                                                    )
                                                }

                                                {
                                                    isButtonClicked.custButMsg3 && (
                                                        <p>
                                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                                            <b>Studies Physics</b> <br />Use this folder for organizing your physics-related study materials, including lecture notes and reference materials.
                                                        </p>
                                                    )
                                                }

                                                {
                                                    isButtonClicked.custButMsg4 && (
                                                        <p>
                                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                                            <b>Contracts</b> <br /> Keep all your contract documents, agreements, and legal paperwork neatly organized in this folder.
                                                        </p>
                                                    )
                                                }

                                                {
                                                    isButtonClicked.custButMsg5 && (
                                                        <p>
                                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                                            <b>Knowledge</b> <br />Use this folder to store informational resources, articles, and reference materials that you find valuable.
                                                        </p>
                                                    )
                                                }

                                                {
                                                    isButtonClicked.custButMsg6 && (
                                                        <p>
                                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />
                                                            <b>Time Table</b> <br />Time TableOrganize your schedules, timetables, and event plans to stay on top of your commitments.
                                                        </p>
                                                    )
                                                }

                                                {
                                                    isButtonClicked.custButMsg7 && (
                                                        <p>
                                                            <img src={'https://static.wixstatic.com/media/91ad40_5319cb69560440058bfb76430609f62f~mv2.png/v1/fill/w_523,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/college%20entrance%20exam-rafiki.png'} alt="" />

                                                            <b>Projects</b> <br />For managing project-related files, including plans, reports, and collaboration documents.
                                                        </p>
                                                    )
                                                }

                                            </div>
                                        </>
                                    )
                                }
                            </>
                        </>
                    )
                }

            </div >
            {/* </div> */}
        </>
    )
}

export default RightContainer