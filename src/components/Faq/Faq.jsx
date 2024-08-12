import React from 'react';
import img from '../../assets/sajek/1.png';
import img1 from '../../assets/kuakata/2.jpeg';

const Faq = () => {
    return (
        <div className="  mt-20 py-10">
            <h1 className="text-2xl font-semibold text-center font-cinzel lg:text-3xl  mb-3">
                            Frequently Asked Questions
                        </h1>

            <div className="flex flex-col md:flex-row">
                <section className="  flex-1 p-6 md:p-10 rounded-lg shadow-lg">
                    <div className="container max-w-4xl mx-auto">
                        
                        <div className="space-y-8">
                            <div className="collapse collapse-plus bg-base-200 rounded-lg shadow-md dark:bg-gray-700">
                                <input type="radio" name="my-accordion" defaultChecked />
                                <div className="collapse-title text-xl font-medium ">
                                    What are the must-visit tourist spots in Bangladesh?
                                </div>
                                <div className="collapse-content">
                                    <p className="p-8 text-sm ">
                                        Bangladesh boasts several must-visit tourist spots, including:
                                        <ul className="list-disc pl-5 mt-2">
                                            <li><strong>Cox's Bazar:</strong> Known for its longest natural sea beach in the world.</li>
                                            <li><strong>Sundarbans:</strong> The largest mangrove forest and home to the Bengal tiger.</li>
                                            <li><strong>Sylhet Tea Gardens:</strong> Beautiful tea estates and lush green landscapes.</li>
                                            <li><strong>Historic Sites:</strong> Lalbagh Fort, the Sixty Dome Mosque, and the ancient ruins of Mahasthangarh.</li>
                                            <li><strong>Srimangal:</strong> The 'Tea Capital' of Bangladesh, ideal for nature lovers.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-base-200 rounded-lg shadow-md ">
                                <input type="radio" name="my-accordion" />
                                <div className="collapse-title text-xl font-medium ">
                                    When is the best time to visit Bangladesh?
                                </div>
                                <div className="collapse-content">
                                    <p className="p-8 text-sm ">
                                        The best time to visit Bangladesh is during the cooler months from November to February. This period offers pleasant weather and is ideal for exploring the country's natural beauty and cultural sites. Avoid the monsoon season (June to October) due to heavy rainfall and potential flooding.
                                    </p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-base-200 rounded-lg shadow-md ">
                                <input type="radio" name="my-accordion" />
                                <div className="collapse-title text-xl font-medium ">
                                    How can I explore the historical spots in Bangladesh?
                                </div>
                                <div className="collapse-content">
                                    <p className="p-8 text-sm ">
                                        To explore historical spots, consider guided tours or local travel agencies specializing in cultural heritage. Some notable historical sites include:
                                        <ul className="list-disc pl-5 mt-2">
                                            <li><strong>Lalbagh Fort:</strong> An ancient Mughal fort complex in Dhaka.</li>
                                            <li><strong>Sixty Dome Mosque:</strong> A UNESCO World Heritage Site in Bagerhat.</li>
                                            <li><strong>Mahasthangarh:</strong> The ruins of an ancient city in Bogura.</li>
                                            <li><strong>Rangamati:</strong> Known for its picturesque landscape and tribal culture.</li>
                                        </ul>
                                        It's also recommended to check local regulations and dress codes, especially when visiting religious sites.
                                    </p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-base-200 rounded-lg shadow-md ">
                                <input type="radio" name="my-accordion" />
                                <div className="collapse-title text-xl font-medium ">
                                    What are some unique cultural experiences in Bangladesh?
                                </div>
                                <div className="collapse-content">
                                    <p className="p-8 text-sm ">
                                        Bangladesh offers several unique cultural experiences:
                                        <ul className="list-disc pl-5 mt-2">
                                            <li><strong>Traditional Festivals:</strong> Participate in festivals like Pohela Boishakh (Bengali New Year) and Durga Puja.</li>
                                            <li><strong>Local Cuisine:</strong> Enjoy traditional dishes such as biryani, hilsa fish curry, and pithas (rice cakes).</li>
                                            <li><strong>Handicrafts:</strong> Visit local markets to buy traditional crafts like Jamdani sarees and Nakshi kantha embroidery.</li>
                                            <li><strong>Cultural Performances:</strong> Watch folk dances like Baul and Jatra, which reflect the vibrant cultural heritage of Bangladesh.</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>

                            <div className="collapse collapse-plus bg-base-200 rounded-lg shadow-md ">
                                <input type="radio" name="my-accordion" />
                                <div className="collapse-title text-xl font-medium t">
                                    Are there any special permits required to visit certain areas?
                                </div>
                                <div className="collapse-content">
                                    <p className="p-8 text-sm ">
                                        Some areas in Bangladesh, particularly border regions and restricted zones, require special permits for visitors. For instance:
                                        <ul className="list-disc pl-5 mt-2">
                                            <li><strong>Border Areas:</strong> Special permits are required for visiting areas close to the borders with India and Myanmar.</li>
                                            <li><strong>Sundarbans:</strong> A permit from the Forest Department is needed to enter the Sundarbans Reserve.</li>
                                            <li><strong>Protected Sites:</strong> Certain historical and archaeological sites may require permission from local authorities or the Department of Archaeology.</li>
                                        </ul>
                                        It's advisable to check with local authorities or travel agencies for the latest information and requirements before planning your visit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex-1 p-6 md:p-10 space-y-4">
                    <img src={img} alt="Scenic view of Sajek Valley" className="w-full h-auto rounded-lg shadow-md" />
                    <img src={img1} alt="Another scenic view of Sajek Valley" className="w-full h-auto rounded-lg shadow-md" />
                </section>
            </div>
        </div>
    );
};

export default Faq;
