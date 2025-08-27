import videoSrc from '../assets/fps.mp4'
export function InfoBrand() {
    return (
        <section className="relative h-screen overflow-hidden">
            <video className="absolute inset-0 w-full h-full object-cover z-[-1]" src={videoSrc} autoPlay loop muted>
            </video>
            <div className="flex flex-col relative z-10 items-center justify-center min-h-screen text-center text-white bg-black/50">
                <h1 className="text-4xl font-bold mb-6">Brand Information</h1>
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <p className="text-gray-700 mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum hic cum tempora veritatis voluptas nemo alias, natus necessitatibus aspernatur optio eveniet repellat tempore earum eligendi provident reprehenderit unde eius maxime.</p>
                    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
} 