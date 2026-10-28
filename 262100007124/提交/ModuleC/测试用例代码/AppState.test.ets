import { describe, it, expect } from '@ohos/hypium';
import { AppState, TokenStore } from '@smart_hotel/datastore';
import { AuthToken } from '@smart_hotel/network';
import {
  AcState,
  CurtainItem,
  LightItem,
  RoomSnapshot,
  SceneItem,
  ServicesState,
  UserInfo
} from '@smart_hotel/network';

function freshState(): AppState {
  const state = AppState.instance;
  state.reset();
  return state;
}

export default function appStateTest() {
  describe('AppState', () => {
    it('applyAc_updates_fields', 0, () => {
      const state = freshState();
      const ac: AcState = { on: true, targetTemp: 24, currentTemp: 22, minTemp: 16, maxTemp: 30 };
      state.applyAc(ac);
      expect(state.acOn).assertTrue();
      expect(state.acTarget).assertEqual(24);
      expect(state.acCurrent).assertEqual(22);
    });

    it('applyServices_updates_fields', 0, () => {
      const state = freshState();
      const services: ServicesState = { doNotDisturb: true, cleaning: false };
      state.applyServices(services);
      expect(state.dnd).assertTrue();
      expect(state.cleaning).assertFalse();
    });

    it('applyLightBatch_updates_fields', 0, () => {
      const state = freshState();
      const lights: LightItem[] = [
        { id: 'bath', name: '浴室灯', icon: 'bath', on: true },
        { id: 'desk', name: '书桌灯', icon: 'desk', on: false }
      ];
      state.applyLightBatch('reading', true, lights);
      expect(state.activeSceneId).assertEqual('reading');
      expect(state.masterLight).assertTrue();
      expect(state.lights.length).assertEqual(2);
    });

    it('updateCurtain_replaces_only_match', 0, () => {
      const state = freshState();
      state.setCurtains([
        { id: 'cloth', name: '布帘', status: 'closed' },
        { id: 'sheer', name: '窗纱', status: 'closed' }
      ]);
      state.updateCurtain({ id: 'cloth', name: '布帘', status: 'opened' });
      expect(state.curtains[0].status).assertEqual('opened');
      expect(state.curtains[1].status).assertEqual('closed');
    });

    it('addLog_prepends_newest', 0, () => {
      const state = freshState();
      state.addLog('第一条');
      state.addLog('第二条');
      expect(state.logs.length).assertEqual(2);
      expect(state.logs[0].endsWith('第二条')).assertTrue();
    });

    it('addLog_caps_at_30', 0, () => {
      const state = freshState();
      for (let i = 0; i < 35; i++) {
        state.addLog(`日志${i}`);
      }
      expect(state.logs.length).assertEqual(30);
    });

    it('applySnapshot_populates_room', 0, () => {
      const state = freshState();
      const room: UserInfo = { roomNo: '1209', guestName: '乔安', checkInDate: '2026-10-20' };
      const ac: AcState = { on: false, targetTemp: 20, currentTemp: 22, minTemp: 16, maxTemp: 30 };
      const scenes: SceneItem[] = [{ id: 'bright', name: '明亮', icon: 'sun' }];
      const lights: LightItem[] = [{ id: 'bath', name: '浴室灯', icon: 'bath', on: true }];
      const curtains: CurtainItem[] = [{ id: 'cloth', name: '布帘', status: 'closed' }];
      const services: ServicesState = { doNotDisturb: false, cleaning: true };
      const snap: RoomSnapshot = {
        room: room,
        ac: ac,
        scenes: scenes,
        activeSceneId: 'bright',
        masterLight: true,
        lights: lights,
        curtains: curtains,
        services: services
      };
      state.applySnapshot(snap);
      expect(state.roomNo).assertEqual('1209');
      expect(state.guestName).assertEqual('乔安');
      expect(state.activeSceneId).assertEqual('bright');
      expect(state.homeSceneId).assertEqual('');
      expect(state.scenes.length).assertEqual(1);
      expect(state.cleaning).assertTrue();
    });

    it('token_store_binds_auth_token', 0, () => {
      TokenStore.setToken('test-token');
      expect(AuthToken.get()).assertEqual('test-token');
      TokenStore.clearToken();
      expect(AuthToken.get()).assertEqual('');
    });

    it('reset_clears_state', 0, () => {
      const state = freshState();
      state.loggedIn = true;
      state.roomNo = '1209';
      state.acOn = true;
      state.homeSceneId = 'bright';
      state.addLog('测试');
      state.setMasterLight(true);
      state.reset();
      expect(state.loggedIn).assertFalse();
      expect(state.roomNo).assertEqual('');
      expect(state.acOn).assertFalse();
      expect(state.homeSceneId).assertEqual('');
      expect(state.masterLight).assertFalse();
      expect(state.logs.length).assertEqual(0);
    });
  });
}



