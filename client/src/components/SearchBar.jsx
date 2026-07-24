function SearchBar(){

    return(

        <section className="search-section">

            <div className="search-box">


                <div className="input-group">

                    <label>
                        Location
                    </label>

                    <input 
                        type="text"
                        placeholder="Enter location"
                    />

                </div>



                <div className="input-group">

                    <label>
                        Property Type
                    </label>

                    <select>

                        <option>
                            Select Type
                        </option>

                        <option>
                            House
                        </option>

                        <option>
                            Apartment
                        </option>

                        <option>
                            Villa
                        </option>

                    </select>

                </div>



                <div className="input-group">

                    <label>
                        Price Range
                    </label>

                    <input 
                        type="text"
                        placeholder="Maximum price"
                    />

                </div>



                <button className="search-btn">
                    Search
                </button>


            </div>

        </section>

    );

}

export default SearchBar;