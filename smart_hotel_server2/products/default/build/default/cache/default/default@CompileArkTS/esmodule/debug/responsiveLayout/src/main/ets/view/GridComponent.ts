if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface GridComponent_Params {
    currentBreakpoint?: string;
    colTemplate?: string;
    data?: number[];
}
import { BreakPointType } from "@normalized:N&&&@ohos/common/Index&1.0.0";
import { commonConstants } from "@normalized:N&&&@ohos/responsivelayout/src/main/ets/constants/CommonConstants&1.0.0";
export class GridComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentBreakpoint = this.createStorageProp('mainBreakpoint', commonConstants.breakpointsInitializeName, "currentBreakpoint");
        this.__colTemplate = new ObservedPropertySimplePU(commonConstants.initializeTemplate, this, "colTemplate");
        this.data = [];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: GridComponent_Params) {
        if (params.colTemplate !== undefined) {
            this.colTemplate = params.colTemplate;
        }
        if (params.data !== undefined) {
            this.data = params.data;
        }
    }
    updateStateVars(params: GridComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
        this.__colTemplate.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentBreakpoint.aboutToBeDeleted();
        this.__colTemplate.aboutToBeDeleted();
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
    private __colTemplate: ObservedPropertySimplePU<string>;
    get colTemplate() {
        return this.__colTemplate.get();
    }
    set colTemplate(newValue: string) {
        this.__colTemplate.set(newValue);
    }
    private readonly data: number[];
    aboutToAppear() {
        for (let i = 0; i < commonConstants.gridSize; i++) {
            this.data.push(i);
        }
        switch (this.currentBreakpoint) {
            case commonConstants.breakpointsSmName:
                this.colTemplate = commonConstants.smColTemplate;
                break;
            case commonConstants.breakpointsMdName:
                this.colTemplate = commonConstants.mdColTemplate;
                break;
            case commonConstants.breakpointsLgName:
                this.colTemplate = commonConstants.lgColTemplate;
                break;
            case commonConstants.breakpointsXlName:
                this.colTemplate = commonConstants.xlColTemplate;
                break;
            default:
                this.colTemplate = commonConstants.smColTemplate;
                break;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(commonConstants.rowWidth);
            Row.height({ "id": 50331663, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width({ "id": 50331666, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Stack.borderRadius({ "id": 50331664, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Stack.margin({ left: { "id": 50331665, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } });
            Stack.backgroundColor({ "id": 125829510, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125832663, "type": 40000, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            SymbolGlyph.fontSize({ "id": 50331666, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            SymbolGlyph.onClick(() => {
                this.getUIContext().getRouter().back();
            });
            SymbolGlyph.fontColor([{ "id": 125831089, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }]);
        }, SymbolGlyph);
        Stack.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.columnsGap({ "id": 50331674, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Grid.rowsGap({ "id": 50331678, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Grid.columnsTemplate(this.colTemplate);
            Grid.onAreaChange(() => {
                this.colTemplate = new BreakPointType({
                    sm: commonConstants.smColTemplate,
                    md: commonConstants.mdColTemplate,
                    lg: commonConstants.lgColTemplate,
                    xl: commonConstants.xlColTemplate
                }).getValue(this.currentBreakpoint);
            });
            Grid.margin({
                left: { "id": 50331675, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" },
                right: { "id": 50331676, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }
            });
            Grid.padding({ bottom: { "id": 50331725, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } });
            Grid.scrollBar(BarState.Off);
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = () => {
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.width(commonConstants.rowWidth);
                            Row.aspectRatio(commonConstants.columnAspectRatio);
                            Row.backgroundColor({ "id": 125829156, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
                            Row.borderRadius({ "id": 50331677, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
                        }, Row);
                        Row.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.padding({ left: { "id": 50331680, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } });
                            Row.width(commonConstants.rowWidth);
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create({ "id": 50331655, "type": 10003, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
                            Text.margin({ top: { "id": 50331681, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } });
                            Text.fontSize({ "id": 50331679, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
                            Text.fontWeight(commonConstants.columnTextFontWeight);
                            Text.fontColor({ "id": 125829210, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
                        }, Text);
                        Text.pop();
                        Row.pop();
                        Column.pop();
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.data, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
