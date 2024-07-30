import findLogo from '../../assets/images/icons8-find-50.png';

function Header() {
    return  <div className="fixed w-full z-10">
        <nav className="flex items-center justify-between w-full h-full bg-black text-white text-sm box-border">
            <ul className="flex ">
                <li className="px-6 py-4 box-border flex items-center h-full hover:bg-gray-300 hover:text-black"><a className="" href="#">HOME</a></li>
                <li className="px-6 py-4 box-border flex items-center h-full hover:bg-gray-300 hover:text-black"><a className="" href="#">BAND</a></li>
                <li className="px-6 py-4 box-border flex items-center h-full hover:bg-gray-300 hover:text-black"><a className="" href="#">TOUR</a></li>
                <li className="px-6 py-4 box-border flex items-center h-full hover:bg-gray-300 hover:text-black"><a className="" href="#">CONTACT</a></li>
                <li className="px-6 py-4 box-border flex items-center h-full hover:bg-gray-300 hover:text-black"><a className="" href="#">MORE</a></li>
            </ul>
            <ul>
                <li className="px-6 py-4"><span><img className='w-5' src={findLogo} alt="" /></span></li>
            </ul>
        </nav>
    </div>;
}

export default Header; // dat ten bat ki vi la default

// import React from "react";

// className Header extends React.Component{ // khong ai dung cai nay nua
//     render(): React.ReactNode {
//         return <div>Hedaer</div>
//     }
// }