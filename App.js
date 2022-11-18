//import logo from './logo.svg';
import './App.css';
import { AccountCircleRounded, AssignmentTurnedInRounded, AttachMoneyRounded, BarChartRounded, ColorLensRounded, DashboardRounded, MoveToInbox, SettingsRemoteRounded, TocRounded } from '@material-ui/icons';
import Item from "./component/Item";
import { motion } from 'framer-motion';
import { useState } from "react";

function App() {

    const [open, setOpen] = useState(true);

    const handleToggle = () => {
        setOpen(!open);
    };

    const sideContainerVariants = {
        true: {
            width: "15rem",
        },
        false: {
            transition: {
                delay: 0.6,
            },
        },
    };

    const profileVariants = {
        true: {
            alignSelf: "center",
            width: "5rem",
        },
        false: {
            alignSelf: "flex-start",
            marginTop: "2rem",
            width: "2rem",
            height: "2.5rem"
        },
    };


    const sidebarVariants = {
        true: {},
        false: {
            width: "3rem",
            transition: {
                delay: 0.4,
            },
        },
    };






    return ( <
        div className = "App" >

        <
        motion.div open = { open }
        variants = { sideContainerVariants }
        initial = { `${open}` }
        animate = { `${open}` }
        className = "sidebar_container" >

        <
        motion.div className = "sidebar"
        initial = { `${open}` }
        animate = { `${open}` }
        variants = { sidebarVariants } >

        <
        motion.div whileHover = {
            {
                scale: 1.2,
                rotate: 180,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(3.5px)",
                WebkitBackdropFilter: "blur(3.5px)",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                transition: {
                    delay: 0.2,
                    duration: 0.4,
                },
            }
        }
        onClick = { handleToggle }
        className = "lines_icon" >
        <
        TocRounded / >

        <
        /motion.div> <motion.div
        layout initial = { `${open}` }
        animate = { `${open}` }
        variants = { profileVariants }
        className = "profile"
        transition = {
            { duration: 0.4 }
        }
        whileHover = {
            {
                scale: 1.1,
                rotate: 360,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                backdropFilter: "blur(5.5px)",
                WebkitBackdropFilter: "blur(5.5px)",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                cursor: "pointer",
            }
        } > <
        img src = "https://www.whatsappimages.in/wp-content/uploads/2021/12/girl-New-Superb-Whatsapp-Dp-Profile-Images-photo.jpg"
        alt = 'profile_img' / >
        <
        /motion.div>  <
        div className = 'groups' >
        <
        div className = 'group' >
        <
        motion.h3 animate = {
            { opacity: open ? 1 : 0, height: open ? "auto" : 0 }
        } >
        ANALYTICS <
        /motion.h3>   <
        Item icon = { < DashboardRounded / > }
        name = 'Dashboard' / >
        <
        Item icon = { < BarChartRounded / > }
        name = "Performance" / >

        <
        /div> < /
        div >




        <
        div className = "group" >
        <
        motion.h3 animate = {
            { opacity: open ? 1 : 0, height: open ? "auto" : 0 }
        } >
        Content <
        /motion.h3> <
        Item icon = { < AttachMoneyRounded / > }
        name = "Sales" / >
        <
        Item icon = { < AssignmentTurnedInRounded / > }
        name = "Checklist" / > { " " } <
        Item icon = { < AccountCircleRounded / > }
        name = "Customers" / >
        <
        /div> <
        div className = "group" >
        <
        motion.h3 animate = {
            { opacity: open ? 1 : 0, height: open ? "auto" : 0 }
        } >
        CUSTOMIZATION <
        /motion.h3> <
        Item icon = { < SettingsRemoteRounded / > }
        name = "Segments" / >
        <
        Item icon = { < ColorLensRounded / > }
        name = "Themems" / >
        <
        /div> < /
        motion.div > <
        /motion.div>

        <
        div className = "body_container" >

        <
        div >
        <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div > <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div> <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div> <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div>  <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div> 

        <
        /div> <
        div >
        <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div> <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div> <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div> <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div>  <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div> 

        <
        /div>

        <
        div >
        <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div> <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div> <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div> <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div>  <
        div className = 'content' > < img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        className = 'divpic' / > < /div> 

        <
        /div>


        <
        /div > < /div >
    );
}

export default App;