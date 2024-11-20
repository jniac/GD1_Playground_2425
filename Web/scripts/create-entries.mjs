import fs from 'fs-extra'
import yaml from 'js-yaml'

async function loadYaml(file) {
  return yaml.load(await fs.readFile(file, 'utf8'))
}

/**
 * @type {{
 *   students: { name: string, github: string,prefix: string }[],
 * }}
 */
const gd1 = await loadYaml('gd1-promotion.yaml')

for (const student of gd1.students) {
  fs.ensureDir(`../Content/Art/${student.prefix}`)
  // await fs.copy('../Content/Art/jnc/jnc_Playground.umap', `../Content/Art/${student.prefix}/${student.prefix}_Playground.umap`)
  // console.log(`Copied jnc_Playground.umap to ${student.prefix}`)
}
