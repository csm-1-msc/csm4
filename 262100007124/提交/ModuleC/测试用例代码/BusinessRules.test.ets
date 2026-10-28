import { describe, it, expect } from '@ohos/hypium';
import { BusinessRules } from '@smart_hotel/utils';

export default function businessRulesTest() {
  describe('BusinessRules', () => {
    it('roomNo_valid', 0, () => {
      expect(BusinessRules.isValidRoomNo('1209')).assertTrue();
    });

    it('roomNo_blank_invalid', 0, () => {
      expect(BusinessRules.isValidRoomNo('   ')).assertFalse();
    });

    it('guestName_valid', 0, () => {
      expect(BusinessRules.isValidGuestName('乔安')).assertTrue();
    });

    it('guestName_blank_invalid', 0, () => {
      expect(BusinessRules.isValidGuestName('')).assertFalse();
    });

    it('temp_step_up', 0, () => {
      expect(BusinessRules.nextTemp(23, 1)).assertEqual(24);
    });

    it('temp_step_down', 0, () => {
      expect(BusinessRules.nextTemp(23, -1)).assertEqual(22);
    });

    it('temp_upper_bound', 0, () => {
      expect(BusinessRules.canStepTemp(30, 1, 16, 30)).assertFalse();
    });

    it('temp_lower_bound', 0, () => {
      expect(BusinessRules.canStepTemp(16, -1, 16, 30)).assertFalse();
    });

    it('temp_in_range', 0, () => {
      expect(BusinessRules.canStepTemp(22, 1, 16, 30)).assertTrue();
    });

    it('progress_clamp_low', 0, () => {
      expect(BusinessRules.clampProgress(-0.5)).assertEqual(0);
    });

    it('progress_clamp_high', 0, () => {
      expect(BusinessRules.clampProgress(1.5)).assertEqual(1);
    });

    it('curtain_left_closed', 0, () => {
      expect(BusinessRules.curtainLeft(0, 38, -112)).assertEqual(38);
    });

    it('curtain_left_opened', 0, () => {
      expect(BusinessRules.curtainLeft(1, 38, -112)).assertEqual(-112);
    });

    it('curtain_right_closed', 0, () => {
      expect(BusinessRules.curtainRight(0, 188, 338)).assertEqual(188);
    });

    it('curtain_right_opened', 0, () => {
      expect(BusinessRules.curtainRight(1, 188, 338)).assertEqual(338);
    });

    it('time_label_padding', 0, () => {
      expect(BusinessRules.timeLabel(9, 5, 3)).assertEqual('09:05:03');
    });

    it('api_success', 0, () => {
      expect(BusinessRules.isApiSuccess(200, 0)).assertTrue();
    });

    it('api_auth_error', 0, () => {
      expect(BusinessRules.isApiSuccess(200, 1101)).assertFalse();
    });

    it('api_http_error', 0, () => {
      expect(BusinessRules.isApiSuccess(500, 0)).assertFalse();
    });
  });
}
