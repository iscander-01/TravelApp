export class AppSettings {
    private readonly CLOUDANT_API_URL = 'https://4937e2b7-d02f-4182-859a-db62fadf37ce-bluemix.cloudant.com';
    private readonly USER_NAME = '4937e2b7-d02f-4182-859a-db62fadf37ce-bluemix';
    private readonly USER_PASS = '264e4e0c3137285db662b5775b3bcf890bad8a8cf4f297b2a2815fdb910758e3';

    readonly CLOUDANT_DB_NAME = 'trip';
    readonly CLOUDANT_VIEW_DESIGN = 'tripDesignDoc';
    readonly CLOUDANT_VIEW_NAME = 'trip-view';
 
    getUserCredentials() { 
        return btoa(this.USER_NAME + ':' + this.USER_PASS);
    }

    getCloudantApiUrl() {
        return this.CLOUDANT_API_URL;
    }
}   