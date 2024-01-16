# Coding Assignment: React + NextJS + JavaScript

## Getting Started

This project is a little "portfolio" demo website. It is built with [React](https://reactjs.org/) and [NextJS](https://nextjs.org/). It is a static website, which means that it is not connected to a database or any other backend.

For styling, this website uses basic [TailwindCSS](https://tailwindcss.com/). TailwindCSS is a utility-first CSS framework. It is not a component library like Bootstrap or Material UI. Instead, it provides a set of CSS classes that you can use to build your own components. You can read more about TailwindCSS [here](https://tailwindcss.com/docs/utility-first).

### Prerequisites

* [Node.js](https://nodejs.org/en/) - JavaScript runtime
* [npm](https://www.npmjs.com/) - Package manager for JavaScript
* Optional: [Visual Studio Code](https://code.visualstudio.com/) with [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension - Code editor

### Installing

1. Clone the repository
2. Open the project in Visual Studio Code
3. Either use the Dev Containers extension to open the project in a container or install the dependencies locally
4. Install the dependencies locally by running `npm install` in the terminal.
5. Run the project by running [`npm run dev`](https://nextjs.org/docs/app/api-reference/next-cli#development) in the terminal. Changes in the code will be automatically applied.
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Need help?

As long as you keep the terminal open after running `npm run dev`, the website under [http://localhost:3000](http://localhost:3000) will automatically update when you make changes to the code. If you want to stop the development server, you can do so by pressing `CTRL + C` in the terminal. If you want to start the development server again, you can do so by running `npm run dev` again.

If there are some errors, try restarting the development server by pressing `CTRL + C` in the terminal and running `npm run dev` again. If that does not help, try running `npm install` again or try reverting your changes.

## Your Task

* Imagine you are a developer who has been tasked with fixing some bugs on this website. Imaging you will have to deliver this website to a client in a few days. You have to make sure that the website is working and looking as expected.
	* There might be some bugs (visual or functional) on the website. Try to find them and fix them.
	* There might be some things missing on the website. Maybe your predecessor forgot to implement some features but left you some "TODO" notes in the code and on the website. Try to find them and implement them.
	* Of course, your client wouldn't want to see the "TODO" notes on the website, so feel free to remove them afterwards.
* Look at the website and try to understand what it does.
* Also, have a look a the code **within** the `./src/app` folder. This is the place where NextJS expects you to put your pages and layout components. This page might be helpful: [https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts).
* If you find something that does not look right to you, try to fix it. Feel free to change the code as you like but try not to waste too much time on refactoring or rewriting the code or re-designing the website.

## Not your task

You do not need to worry about the following things:

* You do not need to worry about files outside the `./src/app` folder and maybe the `package.json` file.
* You do not have to write your own CSS. If you want to change the styling of some aspects of the website, you can do so by changing the TailwindCSS classes in the JSX files.
* You do not have to worry about the responsiveness of the website.
* You do not have to create any new components or files. Everything you need is already there.

## Resources

* The NextJS documentation is very helpful: [https://nextjs.org/docs](https://nextjs.org/docs).
* NextUI Button: [https://nextui.org/docs/components/button](https://nextui.org/docs/components/button)
* Also:
	* [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
	* [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
