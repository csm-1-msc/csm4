import { commonConstants } from "@normalized:N&&&default/src/main/ets/constants/CommonConstants&";
import type { CatalogueItemData } from '../viewmodel/CatalogueItemData';
export function catalogueListComponent(uiContext: UIContext, catalogue: CatalogueItemData[] = [], parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.debugLine("products/default/src/main/ets/view/CatalogueListComponent.ets(6:3)", "default");
        Column.justifyContent(FlexAlign.Center);
        Column.alignItems(HorizontalAlign.Center);
        Column.height(commonConstants.columnHeight);
        Column.margin({
            left: { "id": 50331665, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" },
            right: { "id": 50331666, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }
        });
    }, Column);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        GridRow.create({
            columns: {
                xs: commonConstants.columnXs,
                sm: commonConstants.columnSm,
                md: commonConstants.columnMd,
                lg: commonConstants.columnLg
            }
        });
        GridRow.debugLine("products/default/src/main/ets/view/CatalogueListComponent.ets(7:5)", "default");
    }, GridRow);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        GridCol.create({
            span: {
                xs: commonConstants.spanXs,
                sm: commonConstants.spanSm,
                md: commonConstants.spanMd,
                lg: commonConstants.spanLg
            },
            offset: {
                xs: commonConstants.offsetXs,
                sm: commonConstants.offsetSm,
                md: commonConstants.offsetMd,
                lg: commonConstants.offsetLg
            }
        });
        GridCol.debugLine("products/default/src/main/ets/view/CatalogueListComponent.ets(15:7)", "default");
    }, GridCol);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        List.create();
        List.debugLine("products/default/src/main/ets/view/CatalogueListComponent.ets(29:9)", "default");
        List.width(commonConstants.listWidth);
        List.height({ "id": 50331661, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
        List.scrollBar(BarState.Off);
    }, List);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        ForEach.create();
        const forEachItemGenFunction = _item => {
            const item = _item;
            {
                const itemCreation = (elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    ListItem.create(deepRenderFunction, true);
                    if (!isInitialRender) {
                        ListItem.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                };
                const itemCreation2 = (elmtId, isInitialRender) => {
                    ListItem.create(deepRenderFunction, true);
                    ListItem.backgroundColor({ "id": 125829135, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
                    ListItem.width(commonConstants.listItemWidth);
                    ListItem.height({ "id": 50331663, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
                    ListItem.margin({ bottom: { "id": 50331664, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } });
                    ListItem.borderRadius({ "id": 50331662, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
                    ListItem.onClick(() => {
                        uiContext.getRouter().pushUrl({
                            url: item.uri,
                            params: {
                                data: item.params
                            }
                        }).catch(() => {
                            // handle error
                        });
                    });
                    ListItem.debugLine("products/default/src/main/ets/view/CatalogueListComponent.ets(31:13)", "default");
                };
                const deepRenderFunction = (elmtId, isInitialRender) => {
                    itemCreation(elmtId, isInitialRender);
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(item.title);
                        Text.debugLine("products/default/src/main/ets/view/CatalogueListComponent.ets(32:15)", "default");
                        Text.fontSize({ "id": 50331667, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
                        Text.fontColor({ "id": 125829213, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
                        Text.fontWeight(commonConstants.listFontWeight);
                    }, Text);
                    Text.pop();
                    ListItem.pop();
                };
                this.observeComponentCreation2(itemCreation2, ListItem);
                ListItem.pop();
            }
        };
        (parent ? parent : this).forEachUpdateFunction(elmtId, catalogue, forEachItemGenFunction, (item: CatalogueItemData) => item.id.toString(), false, false);
    }, ForEach);
    ForEach.pop();
    List.pop();
    GridCol.pop();
    GridRow.pop();
    Column.pop();
}
