import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const PlacesCard = ({ p }) => {
    const { images, location, division, place_name, _id } = p;
    return (
        <div className=" rounded-md shadow-md border-2 dark:bg-gray-50 dark:text-gray-800">
            <img src={p.images[0]} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-2xl font-semibold font-cinzel tracking-wide">{place_name}</h2>
                    <p className="dark:text-gray-800">{location}, {division}</p>
                </div>
                <Link to={`/place/${_id}`} className="flex items-center justify-center w-full p-3 bg-green-950/80 font-semibold tracking-wide rounded-md text-white dark:bg-violet-600">
                    Details <FaArrowAltCircleRight className="ml-2 flex items-center justify-center"/>
                </Link>
            </div>
        </div>
    );
};

export default PlacesCard;