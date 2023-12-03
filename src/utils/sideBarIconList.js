//Home
import { IoMdHome } from "react-icons/io";
//Shorts
import { MdOutlineVideoLibrary } from "react-icons/md";
// Subiscriptions
import { MdSubscriptions } from "react-icons/md";
//History
import { FaHistory } from "react-icons/fa";
// Watch Later
import { MdHistoryToggleOff } from "react-icons/md";
// Music
import { IoMusicalNoteOutline } from "react-icons/io5";
// Videos
import { MdLiveTv } from "react-icons/md";
// Trending
import {AiFillFire} from "react-icons/ai" 
// Shopping
import {AiOutlineShopping} from "react-icons/ai"
// sports
import { MdSportsCricket } from "react-icons/md";
// Games
import { IoGameController } from "react-icons/io5";
// Learning
import { AiOutlineBulb } from "react-icons/ai";
// Settings
import {AiFillSetting} from "react-icons/ai" 
// Help
import {BiHelpCircle} from "react-icons/bi" 
// FeedBack
import {MdFeedback} from "react-icons/md"

export const sideBarIconList = [
    {
        name: 'Home',
        key: <IoMdHome />
    },
    {
        name: 'Shorts',
        key: <MdOutlineVideoLibrary/>,
    },
    {
        name: 'Subscriptions',
        key: <MdSubscriptions/>,
    },
    {
        name: 'History',
        key : <FaHistory/>
    },
    {
        name: 'Watch Later',
        key: <MdHistoryToggleOff/>,
    },
    {
        name: 'Music',
        key: <IoMusicalNoteOutline/>
    },
    {
        name: 'Videos',
        key:<MdLiveTv/>
    },
    {
        name: 'Trending',
        key: <AiFillFire/>
    },
    {
        name: 'Shopping',
        key:<AiOutlineShopping/>
    },
    {
        name: 'Sports',
        key: <MdSportsCricket/>
    },
    {
        name: 'Games',
        key: <IoGameController/>
    },
    {
        name: 'Learning',
        key: <AiOutlineBulb/>,
    },
    {
        name: 'Setting',
        key: <AiFillSetting/>
    },
    {
        name: 'Help',
        key:<BiHelpCircle/>
    },
    {
        name: 'Feedback',
        key: <MdFeedback/>
    },
]
