# Chat-Bot

## Introduction

Chat bot with Emi calculator is a component which is useful for bank websites. The chat bot will be very useful to gather 
information from the website instead of manually searching the contents in the web page.

![ss](https://user-images.githubusercontent.com/36465905/36368019-5aa571dc-157b-11e8-9b52-444be46f32b4.jpg)


View the [Demo](https://stackblitz.com/edit/angular-msvjdc?embed=1&file=app/chat-bot/chat-bot.component.ts) in stackblitz

## Technologies used
HTML, CSS, Bootstrap, Angular 5

## Using the complete angular project
Download the chat-bot folder and use it in your project.

### Installing

```
> npm install
```

### Run server

```
> ng serve
```

## Component Functionalities 

###  Chat Bot
This is a traditional chat box where the conversation between the user and the bot takes place. The user has to type the message and click
send button or press enter to send the message.<br>
"HostListner" directive has been used in this component to trigger the key press event. <br>

### Communicate with Chat Bot
By default some basic bot reply is given in the program which is stored in an array.<br>
#### For example<br>
When the user gives "hi" as input message in the chat box, the bot replies with "Hello! How can i help you" The developer can add some more keywords and links to the array & based on the condition the response is received.
#### Keywords
click the input box to get the keywords.<br>
Keywords : loan, Fixed deposit, recurring Deposit


### Calculator 
The component has a "Calculator" button which triggers the calculator as a pop up box. The user must give three values 
1. Loan Amount
2. Interest rate
3. Tenure(in months) <br>

After giving the input, the submit button has to be pressed to get three Outputs,

1. EMI
2. Interest Amount
3. Total amount(Loan amount + interest)


## Build 
use the html element to display the component in your project. <br>

``` <chat-bot (outputData)="getData($event)"></chat-bot> ```

outputData is a variable that wil take input from the user are wil emit ouput.

## @output
All the outputs are emitted from the component and displayed in the console.

```
getData(event) 
{ 
  console.log(event); 
}

```
