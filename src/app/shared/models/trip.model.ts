import { ArticleModel, IArticleResponse} from './trip.article.model';
import { LocationModel, ILocationResponse} from './trip.location.model';
import { ImageModel, IImageResponse} from './trip.image.model';

export interface ITripModelResponse {
  document_id: string;
  document_rev: string;
  id: string;
  title: string;
  date_created: string;
  date_start: string;
  date_end: string;
  article: IArticleResponse;
  price: string;
  images: IImageResponse[];
  locations: ILocationResponse[];
}

export class TripModel {
  document_id: string;
  document_rev: string;
  id: string;
  title: string;
  date_created: string;
  date_start: string;
  date_end: string;
  article: ArticleModel;
  price: string;
  images: ImageModel[];
  locations: LocationModel[];

  public static fromResponse(response: ITripModelResponse): TripModel {
    if (!response) {
      return null;
    }

    const instance: TripModel = new TripModel();
    instance.document_id = response.document_id;
    instance.document_rev = response.document_rev;
    instance.id = response.id;
    instance.title = response.title;
    instance.date_created = response.date_created;
    instance.date_start = response.date_start;
    instance.date_end = response.date_end;
    instance.price = response.price;
    instance.article = ArticleModel.fromResponse(response.article);
    instance.locations = (Object.keys(response.locations || {}))
      .map((index: string) =>
        LocationModel.fromResponse(response.locations[index])
      );
    instance.images = (Object.keys(response.images || {}))
      .map((index: string) =>
        ImageModel.fromResponse(response.images[index])
    );

    return instance;
  }
}
