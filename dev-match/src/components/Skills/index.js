import './style.css'
import ModalSkills from "../ModalSkills";
import { useState } from "react";


function Skills({ skills, addButton }) {
    const [open, setOpen] = useState(false)

    function handleAddSkills(e) {
        e.preventDefault();
        setOpen(true)
    }


    return (
        <div className='flex-row itens-center'>
            <ModalSkills open={open} setOpen={setOpen} />
            {skills.map((skill) => (
                <div key={skills} className='badge blue'>
                    {skill}
                </div>
            ))}

            {addButton && <button className=' add-skills badge blue-outline' onClick={(e) => handleAddSkills(e)}>
                Adicionar
            </button>}
        </div>
    )
}

export default Skills
