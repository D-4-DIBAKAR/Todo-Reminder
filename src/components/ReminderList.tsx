import Reminder from '../models/reminder';

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className='list-group d-flex justify-content-between mx-4'>
      {items.map((item) => (
        <li className='list-group-item d-flex align-items-center' key={item.id}>
          {item.title}
          <button
            onClick={() => onRemoveReminder(item.id)}
            className='btn btn-outline-danger mx-3 rounded-pill'
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
