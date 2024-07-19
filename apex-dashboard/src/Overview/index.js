import './index.css';
import { CiViewList } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { GiTwirlCenter } from "react-icons/gi";
import { GiHourglass } from "react-icons/gi";


function Overview (){
    return(

        <div className='apex-dashboard'>
        <div className='sidebar'>
            <div className='Logo'>
            {/* <img src='/Images/logo.png' alt='' className='logo'></img> */}
            <img src='/Images/logo.png' alt='' className='logo'></img>
            </div>
        <hr/>
        <div className='details'>
        <p className='icon'><CiViewList size='6rem' color='white'/></p>
        <p className='overview-sidebar'>Overview</p>
        </div>
        <hr/>

        <div className='details'>
        <p className='icon'><IoPerson size='6rem' color='white'/></p>
        <p className='sidebar-texts'>Registered Teachers</p>
        </div>
        <hr/>

        <div className='details'>
        <p className='icon'><GiTwirlCenter size='6rem' color='white'/></p>
        <p className='courses'>Courses</p>
        </div>
        <hr/>

        <div className='details'>
        <p className='icon'><GiHourglass size='6rem' color='white'/></p>
        <p className='sidebar-texts'>Teachers' Progress</p>
        </div>



        </div>





         <div className="overview">
            <div className='overviewTopics'>
            <div className="topics">
            <p><b>Registered Teachers</b></p>
            <p><b>899</b></p>
            </div>

            <div className="topics">
            <p><b>Courses</b></p>
            <p><b>3</b></p>
            </div>

            <div className="topics">
            <p><b>Teachers Report</b></p>
            <p><b>899</b></p>
            </div>
            </div>

            <div>
                <div className='overviewDetails'>
                <div className='names'>
                <p className='name-heading'><b>Name</b></p>
                    <p>Nancy Wainaina</p>
                    <p>Laura Nyaaga</p>
                    <p>Jane Kibaara</p>
                    <p>Deborah Cheroh</p>
                    <p>Shalom Keesi</p>

                </div>
                <div>
                <p><b>Date Registered</b></p>
                <p>12/5/2011</p>
                <p>12/5/2011</p>
                <p>12/5/2011</p>
                <p>12/5/2011</p>
                <p>12/5/2011</p>
                </div>
                <div>
                <p><b>Completed Course</b></p>
                <p>3</p>
                <p>2</p>
                <p>0</p>
                <p>5</p>
                <p>1</p>
                </div>
                    
                </div>
            </div> 

        </div> 
        </div>



        
    );

}
export default Overview;