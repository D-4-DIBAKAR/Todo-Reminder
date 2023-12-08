// App.js

import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/reminder';
import ReminderService from './services/reminder';
import NewReminder from './components/NewReminder';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await ReminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App border-2 rounded container${isDarkMode ? ' dark-mode' : ''}`} style={{ backgroundColor: isDarkMode ? '#000' : '', color: isDarkMode ? '#fff' : '' }}>
      <div className="dark-mode-toggle">
        <div className="form-check form-switch ">
          <input
            className="form-check-input my-2"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            onClick={toggleDarkMode}
            checked={isDarkMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </label>
        </div>
      </div>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
