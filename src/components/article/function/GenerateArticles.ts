import Article from "../entity/Article";


export function generateRandomArticles(count: number): Article[] {
    const articles: Article[] = [];

    for (let i = 1; i <= count; i++) {
        const article: Article = new Article(
            i,
            `Titolo dell'articolo ${i}`,
            `Contenuto dell'articolo ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. A lacus vestibulum sed arcu non. Blandit libero volutpat sed cras ornare arcu dui vivamus. Vel pretium lectus quam id leo. Nunc pulvinar sapien et ligula ullamcorper malesuada. Aliquam sem et tortor consequat id porta nibh. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Rhoncus dolor purus non enim praesent elementum facilisis leo. Augue lacus viverra vitae congue eu consequat ac. Vitae auctor eu augue ut. Vitae justo eget magna fermentum iaculis eu non diam phasellus. Ut tristique et egestas quis ipsum suspendisse ultrices.

Imperdiet proin fermentum leo vel. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Ac placerat vestibulum lectus mauris. Morbi tristique senectus et netus et malesuada. Consectetur a erat nam at lectus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Auctor elit sed vulputate mi sit. Lacus viverra vitae congue eu consequat ac felis donec. Tortor posuere ac ut consequat semper. Eget aliquet nibh praesent tristique. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Nullam non nisi est sit amet. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Leo vel orci porta non pulvinar neque.

Amet venenatis urna cursus eget nunc scelerisque viverra. Nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Sagittis purus sit amet volutpat consequat mauris nunc congue. Tincidunt arcu non sodales neque sodales ut. Mattis pellentesque id nibh tortor id. Vestibulum morbi blandit cursus risus. Purus non enim praesent elementum. Diam ut venenatis tellus in metus vulputate. Ut tristique et egestas quis ipsum suspendisse. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Ut diam quam nulla porttitor massa.

Purus non enim praesent elementum facilisis leo vel fringilla. Lorem sed risus ultricies tristique nulla aliquet. Porta lorem mollis aliquam ut. Consectetur a erat nam at lectus urna duis convallis convallis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Parturient montes nascetur ridiculus mus mauris. Id faucibus nisl tincidunt eget. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Velit euismod in pellentesque massa placerat duis ultricies. Sed cras ornare arcu dui vivamus arcu. Donec massa sapien faucibus et molestie ac feugiat sed lectus.

Malesuada pellentesque elit eget gravida cum. Quis hendrerit dolor magna eget est lorem ipsum. Dolor sit amet consectetur adipiscing elit. Nunc aliquet bibendum enim facilisis. Molestie a iaculis at erat pellentesque adipiscing commodo elit. In aliquam sem fringilla ut morbi tincidunt augue. Aliquam id diam maecenas ultricies mi eget mauris. Neque aliquam vestibulum morbi blandit cursus risus at. Id nibh tortor id aliquet lectus proin. Blandit libero volutpat sed cras ornare arcu dui. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.`,
            `/image-default.png`,
            new Date().toISOString().split('T')[0]
        );

        articles.push(article);
    }

    return articles;
}