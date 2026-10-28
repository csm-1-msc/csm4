import { RESPONSIVE_ROUTE, ADAPTIVE_ROUTE, SYSTEM_CAPABILITIES_ROUTE } from "@normalized:N&&&default/src/main/ets/constants/RouteConstants&";
import { CatalogueItemData } from "@normalized:N&&&default/src/main/ets/viewmodel/CatalogueItemData&";
/**
 * Catalogue list page view model.
 */
class CatalogueViewModel {
    /**
     * Get Catalogue data.
     *
     * @return {Array<CatalogueItemData>} CatalogueData.
     */
    getCatalogueData(): CatalogueItemData[] {
        const catalogueData: CatalogueItemData[] = [new CatalogueItemData(0, { "id": 50331708, "type": 10003, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }, RESPONSIVE_ROUTE),
            new CatalogueItemData(1, { "id": 50331703, "type": 10003, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }, ADAPTIVE_ROUTE),
            new CatalogueItemData(2, { "id": 50331709, "type": 10003, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }, SYSTEM_CAPABILITIES_ROUTE)];
        return catalogueData;
    }
}
const catalogueViewModel = new CatalogueViewModel();
export default catalogueViewModel;
