import jsYaml from 'https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/+esm'

async function fetchYaml(url) {
  try {
    const response = await fetch(url)
    const data = await response.text()
    return jsYaml.load(data)
    console.log(doc)
  } catch (error) {
    console.error(error)
  }
}

/**
 * @type {import('./types.d.ts').Promotion}
 */
const promotion = await fetchYaml('../promotion.yaml')

/**
 * @type {{
 *   info: import('./types.d.ts').EvaluationInfo
 *   evaluations: import('./types.d.ts').SimpleEvaluation[]
 * }}
 */
const eval0 = await fetchYaml('./eval-0.yaml')

const table = document.createElement('table')
document.body.appendChild(table)

table.innerHTML = /* html */ `
  <thead>
    <tr>
      <th class="prefix">
        <span class="mono tag">
          pfx
        </span>
      </th>
      <th class="name">
        <span>
          Student
        </span>
      </th>
      <th>
        <span>
          github
        </span>
      </th>
      <th>
        <span>
          Eval #0 (${eval0.info.coefficient})
        </span>
      </th>
    </tr>
  </thead>
  <tbody>
    ${promotion.students.map(generateStudentRow).join('\n')}
  </tbody>
`
function generateStudentRow(student, index) {
  const e0 = eval0.evaluations.find(e => e.prefix === student.prefix)
  return /* html */ `
    <tr>
      <td class="prefix">
        <span class="mono tag">
          ${student.prefix}
        </span>
      </td>
      <td class="name">
        ${student.name}
      </td>
      <td>
        <a href="https://github.com/${student.github}">
          ${student.github}
        </a>
      </td>
      <td>
        ${e0.grade} / 20
      </td>
    </tr>
  `
}

