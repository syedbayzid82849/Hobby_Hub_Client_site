import { useEffect } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import img from '../../assets/hero.png';
import { MdGroupAdd } from "react-icons/md";


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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Group Card 1 */}
                            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
                                <img
                                    src={img}
                                    alt=""
                                    className="rounded-md w-full h-32 object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold">Book Club</h3>
                                <p className="text-gray-500">18 members</p>
                            </div>
                            {/* Group Card 1 */}
                            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
                                <img
                                    src={img}
                                    alt=""
                                    className="rounded-md w-full h-32 object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold">Book Club</h3>
                                <p className="text-gray-500">18 members</p>
                            </div>
                            {/* Group Card 1 */}
                            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
                                <img
                                    src={img}
                                    alt=""
                                    className="rounded-md w-full h-32 object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold">Book Club</h3>
                                <p className="text-gray-500">18 members</p>
                            </div>
                            {/* Group Card 1 */}
                            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
                                <img
                                    src={img}
                                    alt=""
                                    className="rounded-md w-full h-32 object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold">Book Club</h3>
                                <p className="text-gray-500">18 members</p>
                            </div>
                            {/* Group Card 1 */}
                            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
                                <img
                                    src={img}
                                    alt=""
                                    className="rounded-md w-full h-32 object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold">Book Club</h3>
                                <p className="text-gray-500">18 members</p>
                            </div>
                            {/* Group Card 1 */}
                            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
                                <img
                                    src={img}
                                    alt=""
                                    className="rounded-md w-full h-32 object-cover mb-4"
                                />
                                <h3 className="text-lg font-semibold">Book Club</h3>
                                <p className="text-gray-500">18 members</p>
                            </div>
                        </div>
                    </Fade>

                </div>
                <div className="max-w-6xl mx-auto px-4 text-center pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                        <div className="p-4  rounded-xl border">
                            <h4 className="text-xl font-semibold mb-2">Join a group</h4>
                            <p className="">
                                Explore a variety of hobby groups and connect with like-minded people.
                            </p>
                        </div>
                        <div className="p-4  rounded-xl border">
                            <h4 className="text-xl font-semibold mb-2 flex jus items-center gap-2 ">
                                <MdGroupAdd />
                                Start a new group
                            </h4>                            <p className="">
                                Create your own hobby group and find others who share your interests.
                            </p>
                        </div>
                    </div>

                </div>


            </section>
        </div>
    );
};

export default Home;
