if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SliderComponent_Params {
    containerWidth?: number;
}
import { commonConstants } from "@normalized:N&&&@ohos/adaptivelayout/src/main/ets/constants/CommonConstants&1.0.0";
const CONTAINER_WIDTH = 55;
export class SliderComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SliderComponent_Params) {
    }
    updateStateVars(params: SliderComponent_Params) {
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
            Slider.create({
                value: this.containerWidth,
                min: commonConstants.sliderMin,
                max: commonConstants.sliderMax
            });
            Slider.debugLine("features/adaptiveLayout/src/main/ets/view/SliderComponent.ets(10:5)", "@ohos/adaptivelayout");
            Slider.width({ "id": 50331720, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Slider.onChange((value: number) => {
                this.containerWidth = value;
            });
        }, Slider);
    }
    rerender() {
        this.updateDirtyElements();
    }
}
