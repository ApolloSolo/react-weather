import React from 'react'

const ZipSearch = ({zip, forecastByZip, setFormData}) => {

    const onChange = (event) => {
        setFormData(event.target.value);
      };

    const onSubmit = (event) => {
        event.preventDefault();
        forecastByZip(zip);
      };
  return (
    <div className="px-2 max-w-screen-sm mx-auto">
        <form onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="zip"
              className="block my-2 text-gray-600 font-semibold text-center text-2xl"
            >
              Weather By Zip Code
            </label>
            <input
              onChange={onChange}
              name="zip"
              type="text"
              placeholder="Zip Code"
              className="bg-[#4f90b6] px-4 py-2 outline-none rounded-md w-full text-center"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full bg-[#337499]  py-2 text-indigo-100 hover:bg-[#4f90b6] rounded-md text-lg tracking-wide hover:shadow-lg duration-75"
          >
            Search
          </button>
        </form>
      </div>
  )
}

export default ZipSearch