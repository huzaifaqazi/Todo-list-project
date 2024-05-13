#! /usr/bin/env node

import inquirer from "inquirer";

let todos=[];
let codition=true
while(codition){

let todosasked=await inquirer.prompt(
    [
        {
            name:"todo",
            type:"input",
            message:"what you want to add in your todo",

        },{

            name:"addmore",
            type:"confirm",
            message:"Are you want to addmor todo",
            default:"false"
        }
    ]
)
todos.push(todosasked.todo);
codition=todosasked.addmore;
console.log(todos)
}