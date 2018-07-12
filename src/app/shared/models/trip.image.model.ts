export interface IImageResponse {
    location_id: string;
    image_url: string;
  }
  
  export class ImageModel {
    location_id: string;
    image_url: string;
  
    static fromResponse(response: IImageResponse): ImageModel {
      if (!response) {
        return null;
      }
  
      const instance: ImageModel = new ImageModel();
  
      instance.location_id = response.location_id;
      instance.image_url = response.image_url;
  
      return instance;
    }
  }
  