// function to generate markdown for README
function generateMarkdown(answers) {
    return  `
    ## Title
    ${answers.title}

    ## Description 
    ${answers.description}
    
    ## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Contributor](#contributor)
    5. [Tests](#testsInstructions)
    5. [Questions](#questions)
   
    
    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}

    ## License
    ${answers.license}

    ## Contributing
    ${answers.contributor}

    ## Tests
    ${answers.testInstructions}

    ## Questions
    ##Please contact me via my email listed below
    ${answers.userName}
    ${answers.email}

    
  `;
  }
  
  module.exports = {generateMarkdown};