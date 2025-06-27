import { Link, useLoaderData } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import img from '../../assets/hero.png';
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";


const Home = () => {
    const allGroups = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const displayedGroups = showAll ? allGroups : allGroups.slice(0, 8);
    console.log(di);

    
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
                        <Link to="/all-groups">
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
                    <h2 className="text-3xl font-bold mb-8">Featured Groups</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-6">
                        {displayedGroups.map((singleGroup) => (
                            <Link to={`/all-groups/${singleGroup.id}`} key={singleGroup.id}>
                                <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
                                    <img
                                        src={singleGroup.imageUrl}
                                        alt={singleGroup.groupName}
                                        className="rounded-md w-full h-32 object-cover mb-4"
                                    />
                                    <h3 className="text-lg font-semibold">{singleGroup.groupName}</h3>
                                    <p className="text-gray-500">{singleGroup.maxMembers} Members</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {allGroups.length > 8 && (
                        <div className="text-center mt-8">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="mx-auto flex items-center gap-2 px-8 py-3 font-semibold rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-all"
                            >
                                <span>{showAll ? 'Show Less' : 'See More'}</span>
                                <FaArrowRight />
                            </button>
                        </div>
                    )}
                </div>
            </section>
            <section className="py-16 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Fade direction="up">
                        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
                                <h3 className="text-xl font-semibold mb-2">1. Discover Groups</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Browse a variety of hobby groups based on your interests and location.
                                </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
                                <h3 className="text-xl font-semibold mb-2">2. Join or Create</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Easily join existing groups or start your own and invite others.
                                </p>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
                                <h3 className="text-xl font-semibold mb-2">3. Enjoy & Connect</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Participate in activities, meet new people, and grow your passion.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
            <section className="py-16 bg-purple-50 dark:bg-gray-950">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Fade direction="up">
                        <h2 className="text-3xl font-bold mb-10">What Members Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                                <p className="italic text-gray-700 dark:text-gray-300">"HobbyHub helped me find an amazing local painting group. I feel more inspired than ever!"</p>
                                <h4 className="mt-4 font-semibold">— Sarah</h4>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                                <p className="italic text-gray-700 dark:text-gray-300">"I created a chess group and met some awesome people. It’s now part of my weekly life!"</p>
                                <h4 className="mt-4 font-semibold">— Jamal</h4>
                            </div>
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                                <p className="italic text-gray-700 dark:text-gray-300">"Such a user-friendly platform. I joined a hiking group and now we explore trails every weekend."</p>
                                <h4 className="mt-4 font-semibold">— Lina</h4>
                            </div>
                        </div>
                    </Fade>
                </div>
            </section>
        </div>
    );
};

export default Home;
