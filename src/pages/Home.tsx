import Template from "../components/template/Template";
import React from "react";
import Banner from "../components/banner/Banner";
import GroupSection from "../components/groupSection/GroupSection";
import ArticleList from "../components/article/ArticleList";
import Article from "../components/article/entity/Article";
import {generateRandomArticles} from "../components/article/function/GenerateArticles";
import "./Home.css";
import {Typography} from "@mui/material";

export const Home = () => {
    const articles: Article[] = generateRandomArticles(50);
    const displayedArticles = articles.slice(45, 50).reverse();
    return (
        <Template>
            <Banner/>
            <GroupSection/>
            <div className="articoli-home">
                <Typography variant="h5" className="article-home-text">
                    Tieniti sempre informato! Leggi le ultime notizie sul mondo universitario:
                </Typography>
                <ArticleList articles={displayedArticles}/>
            </div>
        </Template>
    );
}