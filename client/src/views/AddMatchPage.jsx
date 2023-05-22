import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMatches, fetchClub } from "../stores/actions/creator";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";

export function AddMatchPage() {
    const MySwal = withReactContent(Swal);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { clubs, isLoading } = useSelector((state) => state.clubs);

    useEffect(() => {
        dispatch(fetchClub());
        // eslint-disable-next-line
    }, []);

    const [matches, setMatches] = useState([
        { club1_id: '', club2_id: '', score_club1: '', score_club2: '' },
    ]);

    if (isLoading === true) {
        return (
            <div className='w-full  flex justify-center '>
                <img className='w-[500px]' src="https://cdn.dribbble.com/users/157088/screenshots/3198615/loader.gif" alt='' />
            </div>
        )
    }

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedMatches = [...matches];
        updatedMatches[index][name] = name.includes('score') ? parseInt(value) : value;
        setMatches(updatedMatches);
      };

    const handleAddMatch = () => {
        setMatches([
            ...matches,
            { club1_id: '', club2_id: '', score_club1: '', score_club2: '' },
        ]);
    };
    const handleRemoveMatch = (index) => {
        const updatedMatches = [...matches];
        updatedMatches.splice(index, 1);
        setMatches(updatedMatches);
    };
    const handleSave = async (e) => {
        e.preventDefault();
        const resultData = { data: matches };
        try {
            await dispatch(addMatches(resultData));
            MySwal.fire({
                icon: "success",
                title: "Soccer Match has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
            navigate("/match");
        } catch (error) {
            MySwal.fire({
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    return (
        <>
            {/* FROM ADD CLUB SECTION */}
            <div className="px-4 pt-6 sm:ml-64">
                <h1 className="text-4xl font-light font-serif">Add Match Score</h1>
                <div className="pt-8">
                    {matches.map((match, index) => (
                        <div key={index} className="flex items-center space-x-4 mb-4">
                            <select
                                name="club1_id"
                                value={match.club1_id}
                                onChange={(event) => handleInputChange(index, event)}
                                className="border rounded px-2 py-1"
                            >
                                <option value="">Choose a club</option>
                                {clubs.map((club, i) => {
                                    return (
                                        <option key={i} value={club?.id}>
                                            {club?.name}
                                        </option>
                                    );
                                })}
                            </select>
                            <span>-</span>
                            <select
                                name="club2_id"
                                value={match.club2_id}
                                onChange={(event) => handleInputChange(index, event)}
                                className="border rounded px-2 py-1"
                            >
                                <option value="">Choose a club</option>
                                {clubs.map((club, i) => {
                                    return (
                                        <option key={i} value={club?.id}>
                                            {club?.name}
                                        </option>
                                    );
                                })}
                            </select>
                            <input
                                type="number"
                                name="score_club1"
                                value={match.score_club1}
                                onChange={(event) => handleInputChange(index, event)}
                                placeholder="Score 1"
                                className="border rounded px-2 py-1"
                            />
                            <span>-</span>
                            <input
                                type="number"
                                name="score_club2"
                                value={match.score_club2}
                                onChange={(event) => handleInputChange(index, event)}
                                placeholder="Score 2"
                                className="border rounded px-2 py-1"
                            />
                            <button
                                onClick={() => handleRemoveMatch(index)}
                                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                                Remove
                            </button>
                        </div>
                    ))}

                    <button
                        onClick={handleAddMatch}
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                        Add Match
                    </button>
                    <button
                        onClick={handleSave}
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                        Save
                    </button>
                </div>
            </div>
            {/* END FROM ADD CLUB SECTION */}
        </>
    );
}
