import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-[#0A0D0B] text-white">
            <section className="bg-[#0F4D2E] py-16 px-6 text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-[30ch] leading-tight">
                    Share a home  with people you can trust.
                    </h1>
                    <h2 className="text-2xl text-left text-black mb-8">
                    Is the Rent of your dream apartment too high for you?
                </h2>
                <p className="text-lg text-left text-gray-200 mb-8">
                    Find verified flatmates and split the upfront rent.
                </p>
                <h2 className="text-2xl text-left text-black mb-8">
                    Do you have an empty room in your house gathering dust?
                </h2>
                <p className="text-lg text-left text-gray-200 mb-8">
                    Put out an ad and let renters come to you. Turn that space into extra revenue
                </p>
                <Link
                    to="/register"
                    className="inline-block bg-black text-white font-semibold px-6 py-3 rounded-lg">
                    Get started
                </Link>
            </section>

            <section className="max-w-4xl mx-auto py-12 px-6 grid gap-8 md:grid-cols-3">
                <div>
                    <h3 className="font-bold text-lg mb-2">Make a profile</h3>
                    <p className="text-gray-300">Tell us your budget, area, and daily habits.</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">See who fits</h3>
                    <p className="text-gray-300">Check area, rent, and house rules before you message anyone.</p>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">Move in together</h3>
                    <p className="text-gray-300">Verified members and a shared plan for paying rent.</p>
                </div>
            </section>
            <section className="py-10 px-6">
            <div className= "flex flex-col md:flex-row md:items-start items-center  gap-6 mx-auto max-w-5xl">
            <div className="w-full md:w-1/2">
                <label>Abuja</label>
            <img
            src="/images/maps/abujaimages.jpg"
            alt="static Map of Abuja, Nigeria"
            className="w-full max-w-full rounded-lg"
            />
            </div>
            <div>
                <label>Lagos</label>
                <img src="/images/maps/lagosimages.jpg"
                alt="Map of Lagos, Nigeria"
                className="w-full max-w-full rounded-lg object-contain"
                />
            </div>
        </div>
        </section>
     </div>   
    );
};

export default Home;

// https://maps.googleapis.com/maps/api/staticmap?center=Abuja,Nigeria&zoom=11&size=640x320&scale=2&maptype=roadmap&markers=color:green%7C9.0765,7.3986&key=${import.meta.env.VITE_MAPS_API}`}

// https://maps.googleapis.com/maps/api/staticmap?center=Lagos,Nigeria&zoom=11&size=640x320&scale=2&maptype=roadmap&markers=color:green%7C9.0765,7.3986&key=${import.meta.env.VITE_MAPS_API}`}