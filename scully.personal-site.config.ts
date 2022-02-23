import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'personal-site',
  distFolder: `./dist/personal-site/${process.env['LOCALE']}`, // output directory of your Angular build artifacts
  outDir: `./dist/static/${process.env['LOCALE']}/`, // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {},
};
