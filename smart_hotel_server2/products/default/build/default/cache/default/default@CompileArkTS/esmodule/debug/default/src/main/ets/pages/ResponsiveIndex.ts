if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ResponsiveIndex_Params {
}
import { responsiveLayout } from "@normalized:N&&&@ohos/responsivelayout/Index&1.0.0";
class ResponsiveIndex extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ResponsiveIndex_Params) {
    }
    updateStateVars(params: ResponsiveIndex_Params) {
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
        }, Column);
        responsiveLayout.bind(this)();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ResponsiveIndex";
    }
}
registerNamedRoute(() => new ResponsiveIndex(undefined, {}), "", { bundleName: "com.atguigu.smart_hotel_server2", moduleName: "default", pagePath: "pages/ResponsiveIndex", pageFullPath: "products/default/src/main/ets/pages/ResponsiveIndex", integratedHsp: "false", moduleType: "followWithHap" });
