import { useEffect } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import img from '../../assets/hero.png'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="text-gray-800 dark:text-gray-100">
            {/* Hero Section */}
            <section className="bg-gray-100 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                    <div className="lg:w-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Connect Through&nbsp;
                            <span className="text-purple-600">
                                <Typewriter
                                    words={["Hobbies", "Creativity", "Community"]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                        </h1>
                        <p className="text-lg">
                            HobbyHub helps you find and join local hobby groups. Whether it’s painting, hiking, or book clubs, there’s something for everyone!
                        </p>
                        <Link to="/groups">
                            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all">
                                Explore Groups
                            </button>
                        </Link>
                    </div>

                    <div className="lg:w-1/2">
                        <img
                            src={img}
                            alt="Hobby Community"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Featured Groups (Dummy for now) */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Fade direction="up">
                        <h2 className="text-3xl font-bold mb-8">Featured Groups</h2>
                        {/* Group Card 1 */}
                        <div className="w-[30%] bg-gray-50 rounded-xl shadow p-4 text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Book Club"
                                className="rounded-md w-full h-32 object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">Book Club</h3>
                            <p className="text-gray-500">18 members</p>
                        </div>
                        
                    </Fade>
                </div>
            </section>

            {/* Static Section 1 - How It Works */}
            <section className="py-16 bg-purple-50 dark:bg-purple-900 text-center">
                <div className="max-w-4xl mx-auto px-4 space-y-4">
                    <h2 className="text-3xl font-bold">How HobbyHub Works</h2>
                    <p>1. Sign up and choose your favorite hobbies.</p>
                    <p>2. Discover nearby groups or create your own.</p>
                    <p>3. Connect, meet, and enjoy doing what you love!</p>
                </div>
            </section>

            {/* Static Section 2 - Testimonials */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">What Our Users Say</h2>
                    <blockquote className="italic">
                        “Thanks to HobbyHub, I found a painting group that meets every Sunday. I made new friends and started loving weekends again!”
                    </blockquote>
                    <p className="mt-4 font-semibold">— A Happy Member</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
