if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SystemCapabilitiesIndex_Params {
    currentBreakpoint?: string;
    breakpointSystem?: BreakpointSystem;
    locationCapability?: boolean;
}
import { BreakpointSystem, BreakPointType } from "@normalized:N&&&@ohos/common/Index&1.0.0";
import { commonConstants } from "@normalized:N&&&default/src/main/ets/constants/CommonConstants&";
class SystemCapabilitiesIndex extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageLink('mainBreakpoint', commonConstants.breakpointsInitializeName, "currentBreakpoint");
        this.breakpointSystem = new BreakpointSystem(commonConstants.breakpointSystemName);
        this.locationCapability = false;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SystemCapabilitiesIndex_Params) {
        if (params.breakpointSystem !== undefined) {
            this.breakpointSystem = params.breakpointSystem;
        }
        if (params.locationCapability !== undefined) {
            this.locationCapability = params.locationCapability;
        }
    }
    updateStateVars(params: SystemCapabilitiesIndex_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private readonly breakpointSystem: BreakpointSystem;
    private locationCapability: boolean;
    aboutToAppear() {
        this.locationCapability = canIUse(commonConstants.locationCapability);
        this.breakpointSystem.register(this.getUIContext());
    }
    aboutToDisappear() {
        this.breakpointSystem.unregister();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/default/src/main/ets/pages/SystemCapabilitiesIndex.ets(25:5)", "default");
            Column.backgroundColor({ "id": 125829132, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Column.height(commonConstants.systemColumnHeight);
            Column.width(commonConstants.systemColumnWidth);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("products/default/src/main/ets/pages/SystemCapabilitiesIndex.ets(26:7)", "default");
            Row.width(commonConstants.systemRowWidth);
            Row.height({ "id": 50331657, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Row.position({ x: { "id": 50331676, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.debugLine("products/default/src/main/ets/pages/SystemCapabilitiesIndex.ets(27:9)", "default");
            Stack.width({ "id": 50331660, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Stack.borderRadius({ "id": 50331658, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Stack.backgroundColor({ "id": 125829510, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125832663, "type": 40000, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            SymbolGlyph.debugLine("products/default/src/main/ets/pages/SystemCapabilitiesIndex.ets(28:11)", "default");
            SymbolGlyph.fontSize({ "id": 50331660, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            SymbolGlyph.onClick(() => {
                this.getUIContext().getRouter().back();
            });
            SymbolGlyph.fontColor([{ "id": 125831089, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }]);
        }, SymbolGlyph);
        Stack.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/default/src/main/ets/pages/SystemCapabilitiesIndex.ets(43:7)", "default");
            Column.width(commonConstants.systemColumnWidth);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.locationCapability ? { "id": 50331654, "type": 20000, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } : { "id": 50331652, "type": 20000, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Image.debugLine("products/default/src/main/ets/pages/SystemCapabilitiesIndex.ets(44:9)", "default");
            Image.width(new BreakPointType({
                sm: { "id": 50331682, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" },
                md: { "id": 50331680, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" },
                lg: { "id": 50331678, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" },
                xl: { "id": 50331684, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }
            })
                .getValue(this.currentBreakpoint));
            Image.height(new BreakPointType({
                sm: { "id": 50331681, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" },
                md: { "id": 50331679, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" },
                lg: { "id": 50331677, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" },
                xl: { "id": 50331683, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }
            })
                .getValue(this.currentBreakpoint));
            Image.margin({ bottom: { "id": 50331685, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.locationCapability ? { "id": 50331706, "type": 10003, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } : { "id": 50331705, "type": 10003, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Text.debugLine("products/default/src/main/ets/pages/SystemCapabilitiesIndex.ets(60:9)", "default");
            Text.fontSize({ "id": 50331686, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Text.fontWeight(commonConstants.textFontWeight);
            Text.fontColor(this.locationCapability ? { "id": 125829222, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } : { "id": 125829216, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Text.margin({
                left: { "id": 50331687, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" },
                right: { "id": 50331687, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }
            });
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "SystemCapabilitiesIndex";
    }
}
registerNamedRoute(() => new SystemCapabilitiesIndex(undefined, {}), "", { bundleName: "com.atguigu.smart_hotel_server2", moduleName: "default", pagePath: "pages/SystemCapabilitiesIndex", pageFullPath: "products/default/src/main/ets/pages/SystemCapabilitiesIndex", integratedHsp: "false", moduleType: "followWithHap" });
