import React from 'react';
import Article from "./entity/Article";
import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import "./ArticleList.css";

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
        <div>
            {articles.map((article) => (
                <Link to={`/article/${article.id}`} style={{ textDecoration: 'none' }}>
                    <Card key={article.id} className="card">
                    <div className="image-list">
                    </div>
                    <CardContent className="content-list">
                        <Typography variant="h6">{article.title}</Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            Data di pubblicazione: {article.publicationDate}
                        </Typography>
                        <Typography variant="body2">
                            {article.content.substring(0, 300)}{article.content.length > 300 ? "..." : ""}
                        </Typography>
                    </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
};
export default ArticleList;