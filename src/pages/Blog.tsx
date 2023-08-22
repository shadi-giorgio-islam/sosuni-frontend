import Template from "../components/template/Template";
import React from "react";
import {BlogPagination} from "../components/blogPagination/BlogPagination";
import SearchBar from "../components/searchBar/SearchBar";

export const Blog = () => {
    return (
        <Template>
            <SearchBar/>
            <BlogPagination/>
        </Template>
    );
}