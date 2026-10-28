if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AdaptiveIndex_Params {
}
import { adaptiveLayout } from "@normalized:N&&&@ohos/adaptivelayout/Index&1.0.0";
import { commonConstants } from "@normalized:N&&&default/src/main/ets/constants/CommonConstants&";
class AdaptiveIndex extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AdaptiveIndex_Params) {
    }
    updateStateVars(params: AdaptiveIndex_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/default/src/main/ets/pages/AdaptiveIndex.ets(11:5)", "default");
            Column.height(commonConstants.adaptiveColumnHeight);
            Column.backgroundColor({ "id": 125829132, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/default/src/main/ets/pages/AdaptiveIndex.ets(12:7)", "default");
            Column.width(commonConstants.adaptiveColumnWidth);
            Column.height({ "id": 50331657, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("products/default/src/main/ets/pages/AdaptiveIndex.ets(13:9)", "default");
            Stack.width({ "id": 50331660, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Stack.borderRadius({ "id": 50331658, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Stack.margin({ left: { "id": 50331659, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } });
            Stack.backgroundColor({ "id": 125829510, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125832663, "type": 40000, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            SymbolGlyph.debugLine("products/default/src/main/ets/pages/AdaptiveIndex.ets(14:11)", "default");
            SymbolGlyph.fontSize({ "id": 50331660, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            SymbolGlyph.onClick(() => {
                this.getUIContext().getRouter().back();
            });
            SymbolGlyph.fontColor([{ "id": 125831089, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }]);
        }, SymbolGlyph);
        Stack.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/default/src/main/ets/pages/AdaptiveIndex.ets(31:7)", "default");
            Column.width(commonConstants.adaptiveFlexibleColumnWidth);
            Column.justifyContent(FlexAlign.Center);
            Column.flexShrink(commonConstants.adaptiveFlexShrink);
        }, Column);
        adaptiveLayout.bind(this)();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "AdaptiveIndex";
    }
}
registerNamedRoute(() => new AdaptiveIndex(undefined, {}), "", { bundleName: "com.atguigu.smart_hotel_server2", moduleName: "default", pagePath: "pages/AdaptiveIndex", pageFullPath: "products/default/src/main/ets/pages/AdaptiveIndex", integratedHsp: "false", moduleType: "followWithHap" });
