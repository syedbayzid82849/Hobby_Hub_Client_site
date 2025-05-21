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
            <section className="py-16 bg-white dark:bg-gray-900">                        <h2 className="text-3xl font-bold mb-8">Featured Groups</h2>

                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Fade direction="up">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* You can map through actual data later */}
                            {[1, 2, 3, 4, 5, 6].map((id) => (
                                <div
                                    key={id}
                                    className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
                                >
                                    <h3 className="text-xl font-semibold">Group {id}</h3>
                                    <p className="mt-2">Join and enjoy this hobby with others near you.</p>
                                    <button className="mt-4 bg-purple-500 px-4 py-2 rounded text-white hover:bg-purple-600">
                                        See More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </Fade>
                </div>
            </section>
        </div>
    );
};

export default Home;
