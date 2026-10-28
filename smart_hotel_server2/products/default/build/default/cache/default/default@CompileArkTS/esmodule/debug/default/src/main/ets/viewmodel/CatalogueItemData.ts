export class CatalogueItemData {
    id: number = 0;
    title: Resource = { "id": 50331659, "type": 10003, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" };
    uri: string = '';
    params?: string;
    constructor(id: number, title: Resource, uri: string, params?: string) {
        this.id = id;
        this.title = title;
        this.uri = uri;
        this.params = params;
    }
}
