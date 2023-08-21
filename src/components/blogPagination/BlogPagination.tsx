
import React, {useState} from "react";
import {Pagination, Stack} from "@mui/material";
import Article from "../article/entity/Article";
import {generateRandomArticles} from "../article/function/GenerateArticles";
import ArticleList from "../article/ArticleList";
import "./BlogPagination.css";
import Box from "@mui/material/Box";

export const BlogPagination = () => {
    const style = {
        '& .MuiPaginationItem-root': {
            color: '#AC3B61'
        },
        '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: '#AC3B61',
            color: '#EEE2DC'
        }
    }
    const ITEMS_PER_PAGE = 5;
    const articles: Article[] = generateRandomArticles(50);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const displayedArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return (
        <div className="blogPagination">
            <h1>Blog</h1>
            <ArticleList articles={displayedArticles} />

            <Box display="flex" justifyContent="center" marginTop={2}>
                <Stack spacing={2} direction="row">
                    <Pagination
                        defaultPage={currentPage}
                        count={totalPages}
                        onChange={handlePageChange}
                        className="pagination"
                        sx={style}
                    />
                </Stack>
            </Box>
        </div>
    );
}