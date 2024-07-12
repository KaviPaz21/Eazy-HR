import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AddVacancy() {
    const [exp, setexp] = useState(0)
    const [inputFields, setInputFields] = useState(['']);
    useEffect(() => {
        AOS.init({
          duration: 500, // You can adjust this value for animation duration
        });
      }, []);


    const addInputField = () => {
        setInputFields([...inputFields, '']); // Add a new empty string to inputFields array
    };
    return (
        <div className='pl-4 mt-4 flex flex-col text-left  bg-slate-100 rounded-xl' data-aos="fade-up">
            <div className='pl-4 pt-4 text-gray-600'>
                <span className='text-gray-700 font-c17 font-semibold'>Vacancies &gt;</span>
                <span className='font-semibold font-c17'> Add Vacancy</span>
                <Link to="/Vacancies"><span className=' float-right mr-32 rounded-xl bg-blue-600 text-white w-32 text-center px-6 py-2 duration-300 hover:bg-blue-700' >Back</span></Link>
            </div>
            <div className='bg-white rounded-xl mt-4 w-cw92'>

                <div className='pt-12 pl-12 text-c20 font-bold'>Publish a new job Vacancy</div>
                <form action="" className='pl-80 ml-8 mt-4  pt-4 '>

                    <table className=''>
                        <tr className='h-20'>
                            <td className='text-nv18 text-gray-700 font-normal font-sans w-60'>Job Position</td>
                            <td> <input type="text" className='bg-gray-100 w-cw500 py-4 pl-12 h-12 rounded-lg border-b-2 border-gray-400' /></td>
                        </tr>
                        <tr className='h-20'>
                            <td className='text-nv18 text-gray-700 font-normal font-sans w-60'>Duration</td>
                            <td className='text-gray-600'>
                                <input type="radio" value="Full Time" name='duration' className='pr-4 mr-4' /><span className='mr-8'>Full Time</span>
                                <input type="radio" value="half Time" name='duration' className='mr-4' /><span>Half</span>
                            </td>
                        </tr>
                        <tr className='h-20'>
                            <td className='text-nv18 text-gray-700 font-normal font-sans w-60'>Type</td>
                            <td className='text-gray-600'>
                                <select className='px-12 bg-gray-100 rounded-sm border-b-2 border-gray-400 text-gray-700 text-18nv'>
                                    <option value="Full" selected>Full Time</option>
                                    <option value="Agreee" >Agreement Based</option>
                                    <option value="Int" >Intern</option>
                                </select>
                            </td>
                        </tr>
                        <tr className='h-20'>
                            <td className='text-nv18 text-gray-700 font-normal font-sans w-60'>Mode</td>
                            <td className='text-gray-600'>
                                <input type="radio" value="Full Time" name='venue' className='pr-4 mr-4' /><span className='mr-8'>Onsite</span>
                                <input type="radio" value="half Time" name='venue' className='mr-4' /><span>Remote</span>
                            </td>
                        </tr>

                        <tr className='h-20'>
                            <td className='text-nv18 text-gray-700 font-normal font-sans w-60'>Experience In Field</td>
                            <td className='text-gray-600'>
                                <input type="range" min="0" max="10" value={exp} onChange={(e) => { setexp(e.target.value) }} step={0.5} style={{ width: '500px' }} className=' px-0 bg-gray-100' /> <span>{exp} Years</span>
                            </td>
                        </tr>

                        <tr className='h-20'>
                            <td className='text-nv18 text-gray-700 font-normal font-sans w-60'>Requirments</td>
                            <td className='text-gray-600'>

                                {inputFields.map((field, index) => (
                                    <div key={index} className="mb-2">
                                        <input type="text" className='bg-gray-100 w-cw500 py-4 pl-12 h-12 rounded-lg border-b-2 border-gray-400' />
                                    </div>
                                ))}

                                <button
                                    type="button" onClick={addInputField} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-2 focus:outline-none">Create Another Requirment</button>
                            </td>
                        </tr>

                        <tr className='h-20'>
                            <td className='text-nv18 text-gray-700 font-normal font-sans w-60'>Special Announcements</td>
                            <td> <textarea name="announce" className='bg-gray-100 w-cw500 h-32 mt-12'  ></textarea></td>
                        </tr>




                        <tr className='h-20'>
                            <td className='text-nv18 text-gray-700 font-normal font-sans w-60'>Closing Date</td>
                            <td className='text-gray-600'>
                                <input type="date" name="date" className='w-72 px-20 bg-gray-100 h-12' />

                            </td>
                        </tr>

                        <tr className='h-20'>
                            <td className='text-nv18 text-gray-700 font-normal font-sans w-60'>Schedule to publish Vacancy</td>
                            <td className='text-gray-600'>
                                <input type="date" name="date" className='w-72 px-20 bg-gray-100 h-12' />

                            </td>
                        </tr>

                        <tr className='h-20'>
                            <td className='text-nv18 text-gray-700 font-normal font-sans w-60'>Confirm Publish</td>
                            <td className='text-gray-600'>
                                <button type='submit' className='w-32 py-2 px-4 bg-blue-600 text-white rounded-xl hover:scale-105 hover:bg-blue-700 duration-300'>Confirm</button>

                            </td>
                        </tr>


                    </table>
                </form>
            </div>
        </div>
    )
}
