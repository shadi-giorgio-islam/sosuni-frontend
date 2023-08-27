import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import {useParams} from "react-router-dom";
import Article from "./entity/Article";
import {generateRandomArticles} from "./function/GenerateArticles";
import "./ArticleContent.css";

const ArticleContent: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const articles: Article[] = generateRandomArticles(50);
    let article: Article | undefined;
    if (id != null) {
        article = articles.find((a) => a.id === parseInt(id, 10));
    }

    if (!article) {
        return <div>Articolo non trovato.</div>;
    }

    return (
            <Container>
                <Typography variant="h2" component="h1" className="titolo">
                    {article.title}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    Data di pubblicazione: {article.publicationDate}
                </Typography>
                <div className="image">
                </div>
                <Typography variant="body1" className="content">
                    {article.content}
                </Typography>
            </Container>
    )
};

export default ArticleContent;