import React, { ChangeEvent, FormEvent } from 'react';
import '../stylesheets/layout/Filters.scss';

interface FilterData {
  name: string;
  value: string;
  checked: boolean;
}

interface FilterProps {
  filterName: string;
  filterGender: string;
  filterStatus: string;
  filterSortedNyName: boolean;
  handleFilters: (data: FilterData) => void;
}

function Filters({
  filterName,
  filterGender,
  filterStatus,
  filterSortedNyName,
  handleFilters,
}: FilterProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = event.target as HTMLInputElement;
    const data: FilterData = {
      name: target.name,
      value: target.value,
      checked: target.checked,
    };
    handleFilters(data);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="form-section">
      <form onSubmit={handleSubmit}>
        <fieldset className="form-section__container">
          <label htmlFor="character" className="form-section__label">
            Name
          </label>
          <input
            type="text"
            id="character"
            name="character"
            placeholder="Search your favorite character"
            onChange={handleInputChange} // Cambia a handleInputChange
            value={filterName}
            className="form-section__input"
          />
        </fieldset>

        <fieldset className="form-section__container">
          <label htmlFor="gender" className="form-section__label">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            onChange={handleInputChange} // Cambia a handleInputChange
            value={filterGender}
            className="form-section__select"
          >
            <option value="all" className="form-section__option">
              All
            </option>
            <option value="female" className="form-section__option">
              Female
            </option>
            <option value="male" className="form-section__option">
              Male
            </option>
            <option value="unknown" className="form-section__option">
              Unknown
            </option>
          </select>
        </fieldset>

        <fieldset className="form-section__container">
          <label htmlFor="status" className="form-section__label">
            Status
          </label>
          <select
            id="status"
            name="status"
            onChange={handleInputChange} // Cambia a handleInputChange
            value={filterStatus}
            className="form-section__select"
          >
            <option value="all" className="form-section__option">
              All
            </option>
            <option value="alive" className="form-section__option">
              Alive
            </option>
            <option value="dead" className="form-section__option">
              Dead
            </option>
            <option value="unknown" className="form-section__option">
              Unknown
            </option>
          </select>
        </fieldset>

        <fieldset className="form-section__container">
          <input
            type="checkbox"
            name="sorted"
            id="sorted"
            checked={filterSortedNyName}
            onChange={handleInputChange} // Cambia a handleInputChange
            className="form-section__checkbox"
          />
          <span className="form-section__checkbox--customized" />
          <label htmlFor="sorted" className="form-section__label">
            Sort by name
          </label>
        </fieldset>
      </form>
    </section>
  );
}

export default Filters;
