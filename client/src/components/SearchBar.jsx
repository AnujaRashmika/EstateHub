function SearchBar({
    location,
    setLocation,
    type,
    setType,
    price,
    setPrice,
    clearFilters
}){


    return(

        <div className="advanced-search">


            <input

                type="text"

                placeholder="Search location..."

                value={location}

                onChange={(e)=>setLocation(e.target.value)}

            />



            <select

                value={type}

                onChange={(e)=>setType(e.target.value)}

            >

                <option value="">
                    Property Type
                </option>

                <option value="House">
                    House
                </option>

                <option value="Apartment">
                    Apartment
                </option>

                <option value="Villa">
                    Villa
                </option>


            </select>



            <input

                type="number"

                placeholder="Max Price"

                value={price}

                onChange={(e)=>setPrice(e.target.value)}

            />



            <button
                onClick={clearFilters}
            >
                Clear
            </button>


        </div>

    );

}


export default SearchBar;