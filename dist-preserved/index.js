import { foo } from './components/sub/index.js';
import { baz } from './components/index.js';

const newBaz = baz;
const newFoo = foo;

export { newBaz, newFoo };
