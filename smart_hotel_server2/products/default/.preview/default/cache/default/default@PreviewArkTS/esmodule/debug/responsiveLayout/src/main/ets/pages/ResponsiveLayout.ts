if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TabIndex_Params {
    currentIndex?: number;
    tabs?: TabBarItem[];
    currentBreakpoint?: string;
    breakpointSystem?: BreakpointSystem;
}
import { BreakpointSystem, BreakPointType } from "@normalized:N&&&@ohos/common/Index&1.0.0";
import { GridComponent } from "@normalized:N&&&@ohos/responsivelayout/src/main/ets/view/GridComponent&1.0.0";
import { commonConstants } from "@normalized:N&&&@ohos/responsivelayout/src/main/ets/constants/CommonConstants&1.0.0";
import type { TabBarItem } from '../viewmodel/TabBarItem';
import TabsViewModel from "@normalized:N&&&@ohos/responsivelayout/src/main/ets/viewmodel/TabsViewModel&1.0.0";
/**
 * ResponsiveLayout page is the entry of project responsiveLayout which combining tab components with grid components.
 */
export function responsiveLayout(parent = null) {
    (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
        Column.create();
        Column.debugLine("features/responsiveLayout/src/main/ets/pages/ResponsiveLayout.ets(12:3)", "@ohos/responsivelayout");
    }, Column);
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
            if (isInitialRender) {
                let componentCall = new TabIndex(parent ? parent : this, {}, undefined, elmtId, () => { }, { page: "features/responsiveLayout/src/main/ets/pages/ResponsiveLayout.ets", line: 13, col: 5 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {};
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "TabIndex" });
    }
    Column.pop();
}
export class TabIndex extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__tabs = new ObservedPropertyObjectPU(TabsViewModel.getTabData(), this, "tabs");
        this.__currentBreakpoint = this.createStorageLink('mainBreakpoint', commonConstants.breakpointsInitializeName, "currentBreakpoint");
        this.breakpointSystem = new BreakpointSystem(commonConstants.breakpointSystemName);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TabIndex_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.tabs !== undefined) {
            this.tabs = params.tabs;
        }
        if (params.breakpointSystem !== undefined) {
            this.breakpointSystem = params.breakpointSystem;
        }
    }
    updateStateVars(params: TabIndex_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__tabs.purgeDependencyOnElmtId(rmElmtId);
        this.__currentBreakpoint.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        this.__tabs.aboutToBeDeleted();
        this.__currentBreakpoint.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private __tabs: ObservedPropertyObjectPU<TabBarItem[]>;
    get tabs() {
        return this.__tabs.get();
    }
    set tabs(newValue: TabBarItem[]) {
        this.__tabs.set(newValue);
    }
    private __currentBreakpoint: ObservedPropertyAbstractPU<string>;
    get currentBreakpoint() {
        return this.__currentBreakpoint.get();
    }
    set currentBreakpoint(newValue: string) {
        this.__currentBreakpoint.set(newValue);
    }
    private readonly breakpointSystem: BreakpointSystem;
    tabBarBuilder(tabBar: TabBarItem, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({
                direction: new BreakPointType({
                    sm: FlexDirection.Column,
                    md: FlexDirection.Row,
                    lg: FlexDirection.Column,
                    xl: FlexDirection.Column
                })
                    .getValue(this.currentBreakpoint), justifyContent: FlexAlign.Center, alignItems: ItemAlign.Center
            });
            Flex.debugLine("features/responsiveLayout/src/main/ets/pages/ResponsiveLayout.ets(25:5)", "@ohos/responsivelayout");
            Flex.width(commonConstants.flexTabBarWidth);
            Flex.height(commonConstants.flexTabBarHeight);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831250, "type": 40000, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            SymbolGlyph.debugLine("features/responsiveLayout/src/main/ets/pages/ResponsiveLayout.ets(34:7)", "@ohos/responsivelayout");
            SymbolGlyph.fontColor(this.currentIndex === tabBar.id ?
                [{ "id": 125829231, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }] : [{ "id": 125829216, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }]);
            SymbolGlyph.fontSize({ "id": 50331689, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
        }, SymbolGlyph);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(tabBar.name);
            Text.debugLine("features/responsiveLayout/src/main/ets/pages/ResponsiveLayout.ets(38:7)", "@ohos/responsivelayout");
            Text.fontSize({ "id": 50331690, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Text.fontColor(this.currentIndex === tabBar.id ? { "id": 125829231, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } : { "id": 125829216, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
            Text.margin(new BreakPointType<Padding>({
                sm: { top: { "id": 50331696, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }, left: { "id": 50331695, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } },
                md: { top: { "id": 50331694, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }, left: { "id": 50331693, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } },
                lg: { top: { "id": 50331692, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }, left: { "id": 50331691, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } },
                xl: { top: { "id": 50331698, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" }, left: { "id": 50331697, "type": 10002, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" } }
            })
                .getValue(this.currentBreakpoint));
        }, Text);
        Text.pop();
        Flex.pop();
    }
    aboutToAppear() {
        this.breakpointSystem.register(this.getUIContext());
    }
    aboutToDisappear() {
        this.breakpointSystem.unregister();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/responsiveLayout/src/main/ets/pages/ResponsiveLayout.ets(63:5)", "@ohos/responsivelayout");
            Column.backgroundColor({ "id": 125829132, "type": 10001, params: [], "bundleName": "com.atguigu.smart_hotel_server2", "moduleName": "default" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({
                barPosition: new BreakPointType({
                    sm: BarPosition.End,
                    md: BarPosition.End,
                    lg: BarPosition.Start,
                    xl: BarPosition.Start
                })
                    .getValue(this.currentBreakpoint)
            });
            Tabs.debugLine("features/responsiveLayout/src/main/ets/pages/ResponsiveLayout.ets(64:7)", "@ohos/responsivelayout");
            Tabs.vertical(new BreakPointType({
                sm: commonConstants.tabSmVertical,
                md: commonConstants.tabMdVertical,
                lg: commonConstants.tabLgVertical,
                xl: commonConstants.tabXlVertical
            })
                .getValue(this.currentBreakpoint));
            Tabs.barWidth(new BreakPointType({
                sm: commonConstants.tabSmBarWidth,
                md: commonConstants.tabMdBarWidth,
                lg: commonConstants.tabLgBarWidth,
                xl: commonConstants.tabXlBarWidth
            })
                .getValue(this.currentBreakpoint));
            Tabs.barHeight(new BreakPointType({
                sm: commonConstants.tabSmBarHeight,
                md: commonConstants.tabMdBarHeight,
                lg: commonConstants.tabLgBarHeight,
                xl: commonConstants.tabXlBarHeight
            })
                .getValue(this.currentBreakpoint));
            Tabs.onAnimationStart((index: number, targetIndex: number) => {
                this.currentIndex = targetIndex;
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    TabContent.create(() => {
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new GridComponent(this, {}, undefined, elmtId, () => { }, { page: "features/responsiveLayout/src/main/ets/pages/ResponsiveLayout.ets", line: 75, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {};
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                            }, { name: "GridComponent" });
                        }
                    });
                    TabContent.tabBar({ builder: () => {
                            this.tabBarBuilder.call(this, item);
                        } });
                    TabContent.width(commonConstants.tabContentWidth);
                    TabContent.height(commonConstants.tabContentHeight);
                    TabContent.debugLine("features/responsiveLayout/src/main/ets/pages/ResponsiveLayout.ets(74:11)", "@ohos/responsivelayout");
                }, TabContent);
                TabContent.pop();
            };
            this.forEachUpdateFunction(elmtId, this.tabs, forEachItemGenFunction, (item: TabBarItem) => item.id.toString(), false, false);
        }, ForEach);
        ForEach.pop();
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
