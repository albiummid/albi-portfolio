import bongoHome from '../../../images/bongo-library/home.png';
import bongoLogin from '../../../images/bongo-library/login-page.png'
import bongoAdmin from '../../../images/bongo-library/admin-pannel.png';
import spectaHome from '../../../images/specta/home.png'
import spectaService from '../../../images/specta/services.png'
import spectaFeature from '../../../images/specta/features.png'
import spectaContact from '../../../images/specta/contact.png'
import hotCHome from '../../../images/hot-chilies/home.png'
import hotCFoodDetails from '../../../images/hot-chilies/food-details.png'
import hotCOrder from '../../../images/hot-chilies/order.png'
import cInfoDetails  from '../../../images/country-info/details.png'
import cInfoHome from '../../../images/country-info/home.png';


 const ProjectData = [
    {
         id: 1,
         description: "A Internet Service Provider website that has dynamic service card with price tag so a user can purchase a service through dashboard and check order status.Dashboard is dynamic and secured for admin .Admin can add feature,service and a user as admin and can change status of orders.User only can purchase and can review. ",
        tools:[ "React","CSS3","Firebase","MongoDB","Node Js","Express Js","Stripe","Google Map" ],
        images: [
        spectaHome,spectaFeature,spectaService,spectaContact
        ],
        title: "SPECTA",
        liveLink: "http://specta-web.web.app",
    repoLink:"https://github.com/albiummid/specta-client-a11"
    } ,
    {
        id: 2,
        description: "A book selling E-commerce website where customer can order books by loggin with thier account.And dynamic database save thier purchase for track them and user can cancel them anytime.Admin pannel have dynamic book adding facilites with picture and have edit and delete funcionality.This web page is fully responsive.Navbar has an access on user account to show user name and sign in /sign out fuctionality. ",
        tools:[ "React","CSS3","Firebase","MongoDB","Node Js","Express Js", ],
        images: [
            bongoHome,
            bongoLogin,
            bongoAdmin
        
        ],
        title: "Bongo Library",
        liveLink: "https://bongo-library.web.app",
    repoLink:"https://github.com/albiummid/bongo-library-client-a10"
    } ,
    {
        id: 3,
        description: "A restuarant website that has dynamic data loading from mongoDB and user can order product by login to thier account.It has three category of meal and has dynamic food details on click on a food and user can set quantity in detail page and then in order page user can change their quantitys .User have to fill up the delevery info from to place order",
        tools:[ "React","CSS3","Firebase","MongoDB","Node Js","Express Js"],
        images: [
            hotCHome,
            hotCFoodDetails,
            hotCOrder
        
        ],
        title: "Hot Chilies",
        liveLink: "https://hot-chilies.web.app",
    repoLink:"https://github.com/albiummid/hot-chilies"
    } ,
    {
        id: 4,
        description: "A Country query user friendly web application that can show the spcific country details on its detail page.User can search thier desire in search box then hitting on enter ,website load country by searched keywords and show the result",
        tools:[ "React","CSS3","Rest API" ],
        images: [
            cInfoHome,
            cInfoDetails
        ],
        title: "Country Info",
        liveLink: "https://country-info.web.app",
    repoLink:"https://github.com/albiummid/country-info"
    } ,
]

export default ProjectData;