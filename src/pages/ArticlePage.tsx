import Article from "../components/article/entity/Article";
import {useParams} from "react-router-dom";
import {generateRandomArticles} from "../components/article/function/GenerateArticles";
import Template from "../components/template/Template";
import ArticleContent from "../components/article/ArticleContent";

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
        <Template>
            <ArticleContent/>
        </Template>
    )
};

export default ArticlePage;