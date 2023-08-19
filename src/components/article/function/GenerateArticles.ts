import Article from "../entity/Article";


export function generateRandomArticles(count: number): Article[] {
    const articles: Article[] = [];

    for (let i = 1; i <= count; i++) {
        const article: Article = new Article(
            i,
            `Titolo dell'articolo ${i}`,
            `Contenuto dell'articolo ${i}. Questo è un esempio di contenuto casuale.`,
            `/images/article${i}.jpg`,
            new Date(new Date().getTime() - i * 1000000).toISOString().split('T')[0]
        );

        articles.push(article);
    }

    return articles;
}