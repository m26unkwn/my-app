import { useFilter, useNote } from "../../../context";
import { uniqueLabels } from "../../../utils";

export const MobileFitler = () => {
  const {
    filterState: { label, priority, sortByDate },
    filterDispatch,
  } = useFilter();
  const {
    allNotes: { notes },
  } = useNote();

  const labels = uniqueLabels(notes);

  const dispatchFilter = (type, e) => {
    filterDispatch({ type: type, payload: e.target.value });
  };

  return (
    <div className=' mobile-filter card-container '>
      <div className='filter-head'>
        <h3>Filters</h3>
      </div>

      <div className='flex  flex-col  jc-center flex-gap '>
        <div className=' filter-content flex flex-gap'>
          <label htmlFor='label'>Label</label>
          <select
            value={label}
            onChange={(e) => dispatchFilter("LABEL", e)}
            name='label'>
            <option value='all'>All</option>
            {labels.length > 0 &&
              labels.map((label) => (
                <option key={label} value={label}>
                  {label}
                </option>
              ))}
          </select>
        </div>
        <div className=' filter-content flex flex-gap'>
          <label htmlFor='priority'> Priority</label>
          <select
            onChange={(e) => dispatchFilter("PRIORITY", e)}
            value={priority}
            name='priority'>
            <option value='all'>All</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>
        </div>
        <div className=' filter-content flex flex-gap '>
          <label htmlFor='date'>Date</label>
          <select
            value={sortByDate}
            onChange={(e) => dispatchFilter("SORT_BY_DATE", e)}
            name='date'>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};
