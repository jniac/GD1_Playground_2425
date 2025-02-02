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
const eval0 = await fetchYaml('./eval-0.yaml')



for (const [index, student] of promotion.students.entries()) {
  const div = document.createElement('div')
  div.innerHTML = /* html */ `
    <div class="row">
      <div class="student-id">
        <span class="mono tag">${student.prefix}</span>
        <span>${student.name}</span>
        <span style="opacity: 0.33;">(${student.github})</span>
      </div>
    </div>
  `
  document.body.appendChild(div)
}
