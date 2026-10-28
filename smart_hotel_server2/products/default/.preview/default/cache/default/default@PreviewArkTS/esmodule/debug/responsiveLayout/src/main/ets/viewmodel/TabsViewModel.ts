import { commonConstants } from "@normalized:N&&&@ohos/responsivelayout/src/main/ets/constants/CommonConstants&1.0.0";
import { TabBarItem } from "@normalized:N&&&@ohos/responsivelayout/src/main/ets/viewmodel/TabBarItem&1.0.0";
/**
 * Binds data to components and provides interfaces.
 */
export class TabsViewModel {
    /**
     * Get item information for the tab.
     *
     * @return {Array<TabBarItem>} tabItems
     */
    getTabData(): TabBarItem[] {
        const tabItems: TabBarItem[] = [];
        for (let i = 0; i < commonConstants.tabSize; i++) {
            const itemInfo: TabBarItem = new TabBarItem();
            itemInfo.id = i;
            itemInfo.name = { "id": 50331724, "type": 10003, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" };
            itemInfo.icon = { "id": 50331728, "type": 20000, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" };
            itemInfo.selectIcon = { "id": 50331727, "type": 20000, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" };
            tabItems.push(itemInfo);
        }
        return tabItems;
    }
}
const tabsViewModel = new TabsViewModel();
export default tabsViewModel;
