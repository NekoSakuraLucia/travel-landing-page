const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            <div
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6)),url('/your-bg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}
                className="h-full w-full object-cover"
            />
            <div className="absolute top-0 h-full w-full flex flex-col items-center justify-center text-center p-4">
                <h1 className="font-bold text-5xl py-2">Special tourist attractions</h1>
                <h3 className="py-4 text-3xl font-medium">
                    The most beautiful and interesting seaside places to visit.
                </h3>
                <button type="button" className="mb-5 mt-7 font-medium border border-white py-4 px-7 rounded-lg bg-white/10 hover:bg-white/5 backdrop-blur-sm duration-300">
                    There are many other interesting places.
                </button>
            </div>
        </div>
    )
}

export default Hero;