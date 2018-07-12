export interface ILocationResponse {
    id: string;
    title: string;
  }
  
  export class LocationModel {
    id: string;
    title: string;
  
    static fromResponse(response: ILocationResponse): LocationModel {
      if (!response) {
        return null;
      }
  
      const instance: LocationModel = new LocationModel();
  
      instance.id = response.id;
      instance.title = response.title;
  
      return instance;
    }
  }
  