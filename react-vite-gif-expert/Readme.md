# Notes

## Credentials for Developer Giphy
```
username: ichuta.josoe@gmail.com
password: 1M155c410
```
## Install dependencies with yarn
```
yarn
```
[Here](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177) you can find the installaton and configuration of JEST + react testing library, copy exactly the same and it shuld work.
### Add new dependencies
```
 yarn add prop-types
```
## Start the react app with yarn with vite
```
yarn vite
```
## Running the test
I get an error with the **babel-core** and **babel-jest** dependencies, so I just update the version and the error disapier
```
yarn add @babel/core@^7.22.0 babel-jest@^24.9.0
```
But I I am still getting another error related to testing-library
```
yarn add --dev @testing-library/dom
```