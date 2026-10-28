if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface AdaptiveLayoutItem_Params {
    containerWidth?: number;
}
import { SliderComponent } from "@normalized:N&&&@ohos/adaptivelayout/src/main/ets/view/SliderComponent&1.0.0";
import { commonConstants } from "@normalized:N&&&@ohos/adaptivelayout/src/main/ets/constants/CommonConstants&1.0.0";
const CONTAINER_WIDTH = 55;
class AdaptiveLayoutItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: AdaptiveLayoutItem_Params) {
    }
    updateStateVars(params: AdaptiveLayoutItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__containerWidth.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__containerWidth.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __containerWidth: ObservedPropertyAbstractPU<number> = this.createLocalStorageLink<number>('containerWidth', CONTAINER_WIDTH, "containerWidth");
    get containerWidth() {
        return this.__containerWidth.get();
    }
    set containerWidth(newValue: number) {
        this.__containerWidth.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(commonConstants.height);
            Column.width(commonConstants.width);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(commonConstants.columnWidth);
            Column.flexShrink(commonConstants.columnFlexShrink);
            Column.height(commonConstants.columnHeight);
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height({ "id": 50331712, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Row.borderRadius({ "id": 50331711, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Row.padding({
                left: { "id": 50331713, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" },
                right: { "id": 50331714, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }
            });
            Row.backgroundColor({ "id": 125829129, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Row.width('' + this.containerWidth + commonConstants.percentSign);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width({ "id": 50331717, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Row.height({ "id": 50331716, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Row.backgroundColor({ "id": 125829156, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Row.borderRadius({ "id": 50331715, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
        }, Row);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width({ "id": 50331720, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Row.height({ "id": 50331719, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Row.backgroundColor({ "id": 125829156, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Row.borderRadius({ "id": 50331718, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
        }, Row);
        Row.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.margin({ bottom: commonConstants.sliderMargin });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SliderComponent(this, {}, undefined, elmtId, () => { }, { page: "features/adaptiveLayout/src/main/ets/pages/AdaptiveLayout.ets", line: 41, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SliderComponent" });
        }
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export function adaptiveLayout(parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.height(commonConstants.height);
        Column.justifyContent(FlexAlign.Center);
    }, Column);
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
            if (isInitialRender) {
                let componentCall = new AdaptiveLayoutItem(parent ? parent : this, {}, undefined, elmtId, () => { }, { page: "features/adaptiveLayout/src/main/ets/pages/AdaptiveLayout.ets", line: 53, col: 5 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {};
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "AdaptiveLayoutItem" });
    }
    Column.pop();
}
