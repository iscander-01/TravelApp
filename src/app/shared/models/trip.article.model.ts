export interface IArticleResponse {
  title: string;
}

export class ArticleModel {
  title: string;

  static fromResponse(response: IArticleResponse): ArticleModel {
    if (!response) {
      return null;
    }

    const instance: ArticleModel = new ArticleModel();

    instance.title = response.title;

    return instance;
  }
}
