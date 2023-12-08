import React, { useState } from 'react';


interface NewReminderProps{
     onAddReminder: (title: string) => void;
}
function NewReminder({onAddReminder}:NewReminderProps): JSX.Element {
     const [title, setTitle] = useState('')
     
     const submitForm = (e: React.FormEvent) => {
          e.preventDefault()
          if (!title)
               return
          onAddReminder(title)
          setTitle('')
          
}

     return (
          <form onSubmit={submitForm}>
                 <div className="input-group my-4">
                    <input type="text"
                         value={title}
                         onChange={e=>setTitle(e.target.value)}
                         className="form-control"
                         placeholder='Enter title...'
                         aria-label="Enter title..."
                         aria-describedby="button-addon2" />
                    <button className="btn btn-primary"
                         type="submit"
                         id="button-addon2">
                         Add Reminder
                    </button>
               </div>
          </form>
     );
}

export default NewReminder;