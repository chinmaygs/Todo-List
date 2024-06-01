import { SiProgress } from "react-icons/si";
import { editTask } from '../api';

function Card({ task, setisloading }) {

    // FUNCTION TO MOVE TASK TO PROGRESS
    const updateProgress = async (id) => {
        try {
            await editTask(id, { Progress: true })
            setisloading(prevIsLoading => !prevIsLoading)
        }
        catch (err) {
            console.log(err)
        }
    }

    // FUNCTION TO MOVE TASK TO COMPLETED
    const updateCompleted = async (id) => {
        try {
            await editTask(id, { Completed: true })
            setisloading(prevIsLoading => !prevIsLoading)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='mt-5 flex flex-col gap-3'>
            {task.map(item => {
                return (
                    // DISPLAY TASKS
                    <div className='bg-gray-50 flex justify-between box-content p-5 h-12 rounded-md' key={item._id}>
                        <div>
                            <h1 className='text-black text-2xl'>{item.Title}</h1>
                            <p className='text-black ml-2 font-light'>{item.Desc}</p>
                        </div>
                        <div>
                            <div>
                           {/* BUTTONS TO MOVE TASKS */}
                                <SiProgress className={`${item.Progress == true ? item.Completed == false ? `fill-green-950 cursor-pointer size-8 transform duration-500 hover:-translate-y-2` : `invisible` : `invisible`} `} onClick={() => updateCompleted(item._id)} />
                                <SiProgress className={`${item.Progress == false ? `fill-yellow-500 cursor-pointer size-8 transform duration-500 hover:-translate-y-2` : "invisible"} `} onClick={() => updateProgress(item._id)} />
                                {/* DISPLAY TIMESTAMP */}
                                <div className="">{item.Completed == true ? item.updatedAt.substring(0, 10) : ''} {item.Completed == true ? item.updatedAt.substring(11, 16) : ''}</div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default Card