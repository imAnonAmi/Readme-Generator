function generateMarkdown(data) {
  return `
# ${data.title} <br>
<br>
## Description <br> 
${data.description}
<br>
### Table of Contents <br>
${data.toc}
<br>
#### Installation <br>
${data.install}
<br>
#### Usage <br>
${data.usage}
<br>
#### License <br>
${data.license}
<br>
#### Contributors <br>
${data.contributors}
<br>
### Tests! <br>
${data.tests}
<br>
#### Questions <br>
${data.questions}
<br>
`;
}

module.exports = generateMarkdown;
