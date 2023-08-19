import React from 'react';
import Article from "./entity/Article";
import {Card, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

interface ArticleListProps {
    articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
    return (
        <div>
            {articles.map((article) => (
                <Card key={article.id} sx={{ display: 'flex', marginBottom: '20px' }}>
                    <CardMedia
                        component="img"
                        alt={`Immagine per ${article.title}`}
                        height="150"
                        image={article.image}
                    />
                    <CardContent>
                        <Typography variant="h6">{article.title}</Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            Data di pubblicazione: {article.publicationDate}
                        </Typography>
                        <Typography variant="body2">
                            {article.content.substring(0, 150)}{article.content.length > 150 ? "..." : ""}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
export default ArticleList;