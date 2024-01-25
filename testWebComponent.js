import { copyFileSync, realpathSync } from 'fs';

const __dirname = realpathSync('.');
const fileName = 'box-sorte-plugin.js';

copyFileSync(`${__dirname}/dist/${fileName}`, `${__dirname}/testWebComponent/${fileName}`)