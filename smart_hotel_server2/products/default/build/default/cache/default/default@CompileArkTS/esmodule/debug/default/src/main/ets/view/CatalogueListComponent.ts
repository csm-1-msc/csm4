import { commonConstants } from "@normalized:N&&&default/src/main/ets/constants/CommonConstants&";
import type { CatalogueItemData } from '../viewmodel/CatalogueItemData';
export function catalogueListComponent(uiContext: UIContext, catalogue: CatalogueItemData[] = [], parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.justifyContent(FlexAlign.Center);
        Column.alignItems(HorizontalAlign.Center);
        Column.height(commonConstants.columnHeight);
        Column.margin({
            left: { "id": 50331671, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" },
            right: { "id": 50331672, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }
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
    }, GridCol);
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        List.create();
        List.width(commonConstants.listWidth);
        List.height({ "id": 50331667, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
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
                    ListItem.height({ "id": 50331669, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
                    ListItem.margin({ bottom: { "id": 50331670, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } });
                    ListItem.borderRadius({ "id": 50331668, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
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
                };
                const deepRenderFunction = (elmtId, isInitialRender) => {
                    itemCreation(elmtId, isInitialRender);
                    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(item.title);
                        Text.fontSize({ "id": 50331673, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
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
