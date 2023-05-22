import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchClub } from "../stores/actions/creator";


export function ClubPage(){

    const dispatch = useDispatch();
    const { clubs, isLoading } = useSelector((state) => state.clubs);

    useEffect(() => {
        dispatch(fetchClub());
        // eslint-disable-next-line
    }, []);

    if (isLoading === true) {
        return (
            <div className='w-full  flex justify-center '>
                <img className='w-[500px]' src="https://cdn.dribbble.com/users/157088/screenshots/3198615/loader.gif" alt='' />
            </div>
        )
    }
    return(
        <>
             {/* ALL CLUB SECTION */}
             <div className="px-4 pt-6 sm:ml-64">
                
                <div className='flex flex-row justify-between items-center mx-6'>
                    <h1 className='text-4xl font-light font-serif'>
                        List of Football Clubs
                    </h1>
                    <Link to="/add-club" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Add Club
                    </Link>
                </div>
                <div className="my-8 mx-6 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-base">
                                    No
                                </th>
                                <th scope="col" className="px-6 py-3 ">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3 text-center text-base">
                                    Club
                                </th>
                                <th scope="col" className="px-6 py-3 text-center text-base">
                                    City
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clubs.map((club, index)=> {
                                    return(
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white ">
                                                {index + 1}
                                            </td>
                                            <td className="w-32 p-4 text-center">
                                                <img src={club.logo}/>
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                                                {club.name}
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                                                {club.city}
                                            </td>
                                        
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>
                </div>

            </div>
            {/*ALL CLUB SECTION */}
        </>
    )
}