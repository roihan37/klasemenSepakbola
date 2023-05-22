import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchClub } from "../stores/actions/creator";

export function KlasemenPage(){
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
             {/* KLASEMEN SECTION */}
             <div className="px-4 pt-6 sm:ml-64 ">
                <div className='flex flex-row justify-between items-center mx-6'>
                    <h1 className='text-4xl font-light font-serif'>
                        Klasemen Kompetisi
                    </h1>
                    <Link to="/add-match" type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Add Match Score
                    </Link>
                </div>
                <div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg mx-6">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Club
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ma
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Me
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    S
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    K
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    GM
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    GK
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Point
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clubs.map((club, index) => {
                                    return(
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {index + 1}
                                        </td>
                                        <td className="w-32 p-4">
                                            <img src={club.logo} alt="Apple Watch"/>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {club.name}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {club.matchTotals}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {club.win}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {club.draw}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {club.loss}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {club.golScored}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {club.lossGol}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {club.point}
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            {/*END KLASEMEN SECTION */}

           
        </>
    )
}