import Article from "../components/article/entity/Article";
import {useParams} from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {generateRandomArticles} from "../components/article/function/GenerateArticles";

const ArticlePage: React.FC = () => {
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
            <Typography variant="h2" component="h1" gutterBottom>
                {article.title}
            </Typography>
            <img src={article.image} alt={`Immagine per ${article.title}`} style={{ width: '100%', height: 'auto' }} />
            <Typography variant="subtitle2" color="textSecondary">
                Data di pubblicazione: {article.publicationDate}
            </Typography>
            <Typography variant="body1" paragraph>
                {article.content}
            </Typography>
        </Container>
    );
};

export default ArticlePage;