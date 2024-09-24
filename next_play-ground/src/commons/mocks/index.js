import { setUpServer } from 'mas/node';
import { apis } from './apis';

export const server = setUpServer(...apis);
