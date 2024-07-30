function Banner() {
    return <div className="relative max-w-full pt-8">
        <img className="w-full" src="https://www.w3schools.com/w3images/chicago.jpg" alt="" />
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center text-white bg-opacity-50 py-10 px-4">
            <div className="text-2xl">Chicago</div>
            <div className="text-base font-bold pt-2">Thank you, Chicago - A night we won't forget.</div>
        </div>
    </div>;
}

export default Banner;