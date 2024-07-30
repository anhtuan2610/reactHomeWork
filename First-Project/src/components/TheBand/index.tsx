function TheBand() {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16">
            <div className="w-2/5 px-4 pb-16  text-center">
                <div className=" text-3xl pb-3">THE BAND</div>
                <div className="py-3 italic  text-gray-500">We love music</div>
                <div className="py-3  text-left">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col items-center justify-center gap-3 w-64 text-center">
                    <div>Name</div>
                    <img className="w-40 rounded-md" src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
                </div>
                <div className="flex flex-col items-center justify-center gap-3 w-64 text-center">
                    <div>Name</div>
                    <img className="w-40 rounded-md" src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
                </div>
                <div className="flex flex-col items-center justify-center gap-3 w-64 text-center">
                    <div>Name</div>
                    <img className="w-40 rounded-md" src="https://www.w3schools.com/w3images/bandmember.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default TheBand;