import React from 'react';

const ContactPage = () => {
    return (
        <div className=" p-6">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Contact Us</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Bangladesh</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-800">Bangladesh</strong>, officially known as the People's Republic of Bangladesh, is a South Asian country rich in history, culture, and natural beauty. Situated on the Bay of Bengal and bordered by India to the west, north, and east, and Myanmar to the southeast, Bangladesh is the eighth-most populous country in the world.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-800">Geography and Climate:</strong> Bangladesh is characterized by its low-lying deltaic terrain, with the majority of its land being part of the Ganges-Brahmaputra Delta. The country experiences a tropical monsoon climate, marked by heavy rainfall during the monsoon season (June to October) and a hot, humid summer. The winter months (November to February) are cooler and more pleasant.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-800">Cultural Heritage:</strong> The cultural heritage of Bangladesh is a vibrant tapestry woven from ancient traditions, including Bengali literature, music, and art. The country is renowned for its traditional festivals such as Pohela Boishakh (Bengali New Year), Durga Puja, and Eid al-Fitr. The rich history is reflected in its diverse architectural styles, including the historic mosques, temples, and the famed ancient city of Mahasthangarh.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-800">Tourist Attractions:</strong>
                            <ul className="list-disc list-inside pl-6 text-gray-600">
                                <li><strong className="text-gray-800">Sundarbans Mangrove Forest:</strong> Home to the Bengal tiger, this UNESCO World Heritage Site is the largest mangrove forest in the world and offers a unique ecosystem of wildlife and natural beauty.</li>
                                <li><strong className="text-gray-800">Cox's Bazar:</strong> Known for having the world's longest natural sea beach, Cox's Bazar is a popular destination for beach lovers and offers stunning views of the Bay of Bengal.</li>
                                <li><strong className="text-gray-800">Sylhet Region:</strong> Famous for its tea gardens, lush green hills, and natural wonders such as Ratargul Swamp Forest and Jaflong.</li>
                                <li><strong className="text-gray-800">Dhaka:</strong> The bustling capital city, with landmarks like the Lalbagh Fort, Ahsan Manzil, and the National Museum, showcasing the rich history and culture of Bangladesh.</li>
                            </ul>
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-800">Cuisine:</strong> Bangladeshi cuisine is known for its diverse and flavorful dishes. Rice and fish are staple foods, and dishes are often cooked with a variety of spices. Popular dishes include biryani, hilsa fish curry, pitha (rice cakes), and various types of lentil soups.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-800">Language and People:</strong> The official language is Bengali (Bangla), and it is spoken by the majority of the population. The people of Bangladesh are known for their hospitality and warmth. The culture is deeply rooted in family values, and traditional practices are highly respected.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-800">Economy:</strong> Bangladesh has a growing economy with key sectors including textiles and garments, agriculture, and remittances. The country is known for its vibrant garment industry, which is one of the largest in the world.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-800">History:</strong> Bangladesh gained independence from Pakistan in 1971 after a long struggle for autonomy. The country's history is marked by its resilience and the strong spirit of its people. Independence Day is celebrated annually on March 26.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            <strong className="text-gray-800">Travel Tips:</strong>
                            <ul className="list-disc list-inside pl-6 text-gray-600">
                                <li><strong className="text-gray-800">Visa Requirements:</strong> Visitors may need a visa to enter Bangladesh. It's advisable to check the visa requirements based on your nationality before traveling.</li>
                                <li><strong className="text-gray-800">Safety:</strong> While Bangladesh is generally safe for tourists, it's important to stay informed about local conditions and follow standard travel precautions.</li>
                                <li><strong className="text-gray-800">Currency:</strong> The currency used is the Bangladeshi Taka (BDT). Credit cards are widely accepted in major cities, but it's useful to carry cash for smaller establishments.</li>
                            </ul>
                        </p>
                    </section>

                   
                </div>

                <div className="flex-1">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Find Us on the Map</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d367342.65539187466!2d90.32689915320385!3d23.810318038888233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c3dce7a96a83%3A0xd0c65784517a8ee8!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1690906737930!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            className="border-0 rounded-lg shadow-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
