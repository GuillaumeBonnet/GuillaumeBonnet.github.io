import { promises as fs } from "fs";
import {execa} from 'execa';



// rmdirSync("dist/static/fr-FR/", { recursive: true });
const removeStaticFolderContent = async () => {
  const files = await fs.readdir("dist/static/");
  for (const file of files) {
    if(file == '.git') {
      continue;
    }
    const filePath = `dist/static/${file}`;
    if((await fs.lstat(filePath)).isDirectory()) {
      await fs.rmdir(filePath, { recursive: true});
    } else {
      await fs.unlink(filePath);
    }
  }
}
const buildSteps = async () => {
  // const {stdout: stdout_build} = await execa('ng build');
  // console.log(stdout_build);

  process.env['LOCALE'] = 'en-US';
  const {stdout: stdout_scullyEng} = await execa('npx scully --scanRoutes');
  console.log(stdout_scullyEng);

  process.env['LOCALE'] = 'fr-FR';
  const {stdout: stdout_scullyFr} = await execa('npx scully --scanRoutes');
  console.log(stdout_scullyFr);

  const {stdout: stdout_cd} = await execa('cd dist/static/');
  console.log(stdout_cd);

  const {stdout: stdout_cpRootIndex} = await execa('cp fr-FR/index.html .');
  console.log(stdout_cpRootIndex);

  const {stdout: stdout_giAddAll} = await execa('git add -A');
  console.log(stdout_giAddAll);

  const {stdout : commitShaMain} = await execa('git rev-parse --short main');
  console.log(commitShaMain);
  // stdout = await execa('git commit -a -m \"Build step: automatic commit\"');
  // console.log(stdout);
}

(async () => {
  try {
    await removeStaticFolderContent();
    await buildSteps();
  } catch (err) {
    console.error(err);
  }
})();

