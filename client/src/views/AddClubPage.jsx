import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addClub } from "../stores/actions/creator"
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom"
export function AddClubPage() {
    const MySwal = withReactContent(Swal)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formClub, setFormClub] = useState({
        logo: '',
        name: '',
        city: ''
    })
    const { isLoading } = useSelector((state) => state.clubs);

    const henddleForm = (e) => {
        const newFrom = {
            ...formClub,
            [e.target.name]: e.target.value
        }
        setFormClub(newFrom)
    }

    if (isLoading === true) {
        return (
            <div className='w-full  flex justify-center '>
                <img className='w-[500px]' src="https://cdn.dribbble.com/users/157088/screenshots/3198615/loader.gif" alt='' />
            </div>
        )
    }

    const henddleSubmit = async (e) => {
        
            e.preventDefault();
            console.log(formClub);
            try {
                await dispatch(addClub(formClub))
                MySwal.fire({
                    icon: 'success',
                    title: 'Club added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/club')
    
            } catch (error) {
                MySwal.fire({
                    icon: 'error',
                    title: error,
                    showConfirmButton: false,
                    timer: 1500
                })
            }

    }

    return (
        <>
            {/* FROM ADD CLUB SECTION */}
            <div className="px-4 pt-6 sm:ml-64 ">
                <h1 className='text-4xl font-light font-serif mx-6'>
                    Add Football Club
                </h1>
                <form onSubmit={henddleSubmit} className='pt-8 mx-6'>
                    <div className="mb-6">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Logo</label>
                        <input type="logo" name="logo" value={formClub.logo} onChange={henddleForm} id="logo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Logo image link" required />
                    </div>
                    <div className="mb-6">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name Club</label>
                        <input type="name" name="name" id="name" value={formClub.name} onChange={henddleForm} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Football club name" required />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <input placeholder='football club city' name="city" value={formClub.city} onChange={henddleForm} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className='flex flex-row'>
                        <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Add Club
                        </button>
                        <Link to="/club"  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                            Cancel
                        </Link>

                    </div>
                </form>
            </div>
            {/* END FROM ADD CLUB SECTION */}
        </>
    )
}