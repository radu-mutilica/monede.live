# monede.live
Aggregator for cryptocurrency trends and prices

## What is it? ##
A price and trends aggregator for cryptocurrency which uses historical pricing and Google Trends to predict/detect market movements.

## Running it ##
First you need to have [monede-core](https://github.com/radu-mutilica/monede-core "monede-core") running. More instructions on how to run that in the project's readme.

This is a React based app, so you need node.js installed. Once that is done, the only environment set up required is setting the address of the monede-core flask app. 
```bash
cd <root>
export REACT_APP_MONEDE_BACKEND=http://127.0.0.1:5000
npm install
npm start
```
