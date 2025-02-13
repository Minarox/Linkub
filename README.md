<p align="center">
  <img src=".github/logo.svg" width="112px">
</p>

<h1 align="center">Linkub</h1>

[Linkub](https://github.com/Minarox/Linkub) is a simple web page that lists all your links to other sites. ([Demo »](https://minarox.github.com/Linkub))

<div align="center">
  <img src="/.github/screenshot.webp" width="80%">
</div>

<sub>If you like this project, please star it & [follow me](https://github.com/Minarox) to see what other cool projects I'm working on! ❤️</sub>

## ⭐️ Features

- 🖼️ **Simple layout** - Easly show and share all of your links
- 🔍 **SEO friendly** - Auto generating tags for better referencing
- 📱 **Responsive** - Already compatible with all screen sizes
- ⚙️ **Configurable** - Change name, description and links with ease

## 🚦 3-step setup

1. Clone template

    Use built-in GitHub template feature to clone this repository or use: `git clone https://github.com/Minarox/Linkub`.

2. Edit project (variables and assets)

    **(To finish)**

3. Build static files

    Generate website from source files: `npm run build`.

    Congratulation, you have now a landing page with all of your links.
    The final website is located inside `/dist` and is ready to deploy online!

## ⚙️ Scripts

### dev

Command: `npm run dev`

Start Astro web development server at [http://localhost:4321](http://localhost:4321).

### check

Command: `npm run check`

Scan all source files and search for TypeScript warnings and errors.

### build

Command: `npm run build`

Build static pages from source files in `/dist` folder.

### preview

Command: `npm run preview`

Start Astro web server to preview static pages (`/dist`) at [http://localhost:4321](http://localhost:4321).

### test

Default: `npm run test`

One time run of all tests inside `/test` folder with complete code coverage.

### coverage

Default: `npm run coverage`

Start Vite web server to preview coverage report at [http://localhost:4173](http://localhost:4173).

## 💁‍♀️ FAQ

### Can I use this for non-published projects?
Yes. All you need to do is specify distribution files in the `files` array in `package.json`.

### How is this different from [size-limit-action](https://github.com/marketplace/actions/size-limit-action)?

[size-limit-action](https://github.com/marketplace/actions/size-limit-action) approaches size monitoring from a budgeting standpoint, and has features such as rejecting PRs if the proposed changes are too large. It requires specifying each distribution file and doesn't show compression sizes.

**pkg-size-action** accepts that size increases can be often warranted if the feature/bug-fix is important, and approaches monitoring from a purely informational standpoint. It encourages being size conscious without blocking your changes. pkg-size-action can also automatically detect distribution files based on your `package.json` configuration.

## 💼 License

MIT © Mathis Serrieres Maniecki
