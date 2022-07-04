import React from "react";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";

const Home = () => {
    return(
        <div>
            {/* Page Header */}
            <Header/>

            {/* Search Bar */}
            <SearchBar/>

            {/* Blog List & Empty List */}
        </div>
    )
}

export default Home;

