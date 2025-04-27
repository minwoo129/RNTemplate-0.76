import {device, waitFor, element} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await waitFor(element(by.text('TabScreen1'))).toBeVisible();
  });
});
