function TourDates() {
    return <div className="flex justify-center items-center max-w-full h-auto bg-black">
        <div className="w-2/5 py-16">
            <div className="text-center">
                <div className="text-white text-2xl">TOUR DATES</div>
                <div className="italic text-gray-400 font-medium py-6">Remember to book your tickets!</div>
            </div>
            <div>
                <ul className="pb-8">
                    <li className="bg-white text-gray-500 text-base py-2 px-3 border-b">September <span className="bg-red-600 text-white px-2">Sold out</span></li>
                    <li className="bg-white text-gray-500 text-base py-2 px-3 border-b">October <span className="bg-red-600 text-white px-2">Sold out</span></li>
                    <li className="bg-white text-gray-500 text-base py-2 px-3 border-b">November <span className="bg-red-600 text-white px-2">Sold out</span><span className="bg-black w-6 text-white ư flex items-center justify-center rounded-full float-end">3</span>
                    </li>
                </ul>
            </div>
            <div className="flex gap-4">
                <div className="w-64 h-96 bg-white">
                    <img src="https://www.w3schools.com/w3images/newyork.jpg" alt="" />
                    <div className="px-4">
                        <div >
                            <div className="text-base font-bold py-2 pt-3">New York</div>
                            <div className="text-gray-400 pb-3">Fri 27 Nov 2016</div>
                            <div className="text-base pb-2">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</div>
                        </div>
                        <button className="bg-black px-4 py-2 text-white">Buy Tickets</button>
                    </div>
                </div>
                <div className="w-64 h-96 bg-white">
                    <img src="https://www.w3schools.com/w3images/newyork.jpg" alt="" />
                    <div className="px-4">
                        <div >
                            <div className="text-base font-bold py-2 pt-3">New York</div>
                            <div className="text-gray-400 pb-3">Fri 27 Nov 2016</div>
                            <div className="text-base pb-2">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</div>
                        </div>
                        <button className="bg-black px-4 py-2 text-white">Buy Tickets</button>
                    </div>
                </div>
                <div className="w-64 h-96 bg-white">
                    <img src="https://www.w3schools.com/w3images/newyork.jpg" alt="" />
                    <div className="px-4">
                        <div >
                            <div className="text-base font-bold py-2 pt-3">New York</div>
                            <div className="text-gray-400 pb-3">Fri 27 Nov 2016</div>
                            <div className="text-base pb-2">Praesent tincidunt sed tellus ut rutrum sed vitae justo.</div>
                        </div>
                        <button className="bg-black px-4 py-2 text-white">Buy Tickets</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default TourDates;