import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMatch } from "../stores/actions/creator";

export function PertandinganPage(){
    const dispatch = useDispatch();
    const { matches, isLoading } = useSelector((state) => state.matches);

    useEffect(() => {
        dispatch(fetchMatch());
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
             <div className="px-4 pt-6 sm:ml-64">
                <div className='flex w-full justify-center'>
                    <h1 className='text-4xl font-light font-serif '>
                        Pertandingan
                    </h1>
                
                </div>
                <div className="pt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                               
                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                matches.map((match, index) => {
                                    return(
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        
                                        <td className="w-32 p-4">
                                            <img src={match.club1.logo} alt="Apple Watch"/>
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {match.club1.name}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {match.score_club1}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            -
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {match.score_club2}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {match.club2.name}
                                        </td>
                                        <td className="w-32 p-4">
                                            <img src={match.club2.logo} alt="Apple Watch"/>
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