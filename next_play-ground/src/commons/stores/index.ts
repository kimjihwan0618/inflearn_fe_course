import { atom, selector } from 'recoil';
import { getAccessToken } from '../lib/getAccessToken';

export const isEditState = atom({
  key: 'isEditState',
  default: true,
});

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: '',
});

export const vistedPageState = atom({
  key: 'vistedPageState',
  default: '',
});

export const restoreAccessTokenLoadable = selector({
  key: 'restoreAccessTokenLoadable',
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
