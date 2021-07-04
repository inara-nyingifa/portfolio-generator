//requirer node module inquirer and file system (fs)
const inquirer = require('inquirer');
const fs = require('fs')
const util = require('util');
const {generateMarkdown} = require('./utils/generateMarkdown');
//const { error } = require('console');

const writeFileAsync = util.promisify(fs.writeFile)

//inquirer prompt will generte the questions

const promptUser = () => {
inquirer.prompt
 ([
    {
    message: "what is the title of your project?",
    type: 'input',
    name: 'title',
    // validate prop to make sure user enters true value
    //validate:(value) =>{if (value){return true} else {return "i need a value to continue"}},
    },

    {
        messgae:'Give a brief description about your project?',
        type:'input',
        name:"description",
        //validate:(value) =>{if (value){return true} else {return "i need a value to continue"}},
    },

    {
        messgae:'how do you install your app?',
        type:'input',
        name:"installation",
        //validate:(value) =>{if (value){return true} else {return "i need a value to continue"}},
    },

    {
        messgae:'test instructions to be followed',
        type:'input',
        name:'testInstructions',
       // validate:(value) =>{if (value){return true} else {return "i need a value to continue"}},
    },

    {
        messgae:'how do you use your app?',
        type:'input',
        name:'usage',
       // validate:(value) =>{if (value){return true} else {return "i need a value to continue"}},
    },

    {
        messgae:'what license did you use?',
        type:'list',
        name: 'license',
        choices:['The MIT License','The CPL License', 'Apache License', 'GNU License','N/A'],
      //  validate:(value) =>{if (value){return true} else {return "i need a value to continue"}},
    },

    {
        messgae:'where there any contributor to this project?',
        type:'input',
        name: 'contributor',
      //  validate:(value) =>{if (value){return true} else {return "i need a value to continue"}},
    },

    {
        messgae:'GitHub username?',
        type:'input',
        name:'userName',
       // validate:(value) =>{if (value){return true} else {return "i need a value to continue"}},
    },
    {
        messgae:'Email?',
        type:'input',
        name:'email',
      //  validate:(value) =>{if (value){return true} else {return "i need a value to continue"}},
    }
]
).then (answers =>{
    writeToFile(answers)
    console.log('successfully wrote to README.md! :)')
    }).catch((err)=> console.error(err));
};
const writeToFile = answers => {
    writeFileAsync ('README.md', generateMarkdown(answers))
}
promptUser();