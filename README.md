# Cambios del _fork_

## Adaptación al Manual de Identidad Corporativa

He intentado _transcribir_ las pautas de diseño aplicables según el [Manual de Identidad Corporativa] de la [Junta de Andalucía] y especialmente el [Sistema de diseño del modelo de servicios digitales].

El trabajo no está terminado; por ahora he _transcrito_ los estilos de los siguientes elementos:

- Colores.
- Tipografías y tamaños.
- Enlaces.
- Encabezados y textos.

## Requerimientos (lo que a mí me ha funcionado)

Para usar este fork de **Vue Design System** he utilizado un Windows 10 20H2 con Node.js versión 14.16.1.

## Instrucciones de inicio

La primera vez después del _fork_ Entre `install` y `start` he necesitado ejecutar `update`, por lo que la secuencia de órdenes la primera vez queda tal que así:

```
# npm install
# npm update
# npm start
```

## Cambios de configuración

- `npm start` escucha en el puerto 9080, en vez de 8080.

---

# Vue Design System

**Vue Design System** is an open source tool for building UI Design Systems with [Vue.js](https://vuejs.org). It provides you and your team a set of organized tools, patterns & practices that work as the foundation for your application development.

The tool is built on top of [Vue.js](https://vuejs.org), [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist), [Webpack](https://webpack.js.org), and [Theo](https://github.com/salesforce-ux/theo) and is aimed for designers and front-end developers who have at least basic knowledge of component based workflows + HTML, SCSS & JavaScript.

**Made by [@viljamis](https://twitter.com/viljamis) and other contributors. See also [the official website](https://vueds.com) of Vue Design System and [read my article](https://viljamis.com/2018/vue-design-system/) on the processes and workflow I use to get started with a new design system project.**

[![Screenshot](./docs/preview.gif)](https://vueds.com/)

## Features

- A set of interconnected patterns & practices for you and your team.
- A well thought-out terminology, naming conventions, and hierarchy.
- Get an automated overview of how your design system progresses over time.
- Global design tokens in YAML format that you can use inside any component.
- Automatic generation of living, user editable documentation.
- Easily export and use your Design System as an NPM dependency in another Vue.js or Nuxt.js project.
- Create a token, an element, or a pattern, and it’s immediately available across all components.
- Pre-configured Prettier setup for auto-formatting code on both save and before commit.
- Live Reloading, Autoprefixing, SCSS, and helper functions + simple and sane defaults for SVG and Webfont usage out-of-the-box.
- Documentation and the app logic are separated, so you can have public docs while the app itself stays private.
- [And more…](https://vueds.com/)

## Documentation

- **[Getting Started](https://github.com/viljamis/vue-design-system/wiki/getting-started): How to install and run Vue Design System.**
- [Terminology](https://github.com/viljamis/vue-design-system/wiki/terminology): Introduction to the system concepts and its hierarchy.
- [Naming of Things](https://github.com/viljamis/vue-design-system/wiki/naming-of-Things): Naming is hard, so it’s good to have clear guidelines.
- [Directory Structure](https://github.com/viljamis/vue-design-system/wiki/directory-structure): What goes where and why.
- [Working with the System](https://github.com/viljamis/vue-design-system/wiki/working-with-the-system): Concrete examples on how to work with `Tokens`, `Elements` , `Patterns` and `Templates`.
- [Editing Living Documentation](https://github.com/viljamis/vue-design-system/wiki/editing-living-documentation): How to customize the living system documentation.
- [Spacing](https://github.com/viljamis/vue-design-system/wiki/spacing): A framework for creating a predictable and harmonious spacing.
- [Component Status](https://github.com/viljamis/vue-design-system/wiki/Component-Status): Clear labels that reflect the state of completion.
- [Component QA](https://github.com/viljamis/vue-design-system/wiki/Component-QA): How to review new components and keep the quality high.
- [Contributing](https://github.com/viljamis/vue-design-system/blob/master/CONTRIBUTING.md): A set of guidelines for contributing to the system.
- [Code of Conduct](https://github.com/viljamis/vue-design-system/blob/master/CODE_OF_CONDUCT.md): By participating you agree to abide by its terms.
- [Frequently Asked Questions](<https://github.com/viljamis/vue-design-system/wiki/frequently-asked-questions-(FAQ)>): How to use icons, how to use font-face, etc.

## Examples

- **[Official example](https://vueds.com/example)**
- [Using Vue Design System as NPM dependency on Vue.js project](https://github.com/viljamis/vue-design-system-example)
- [Using Vue Design System as NPM Dependency on Nuxt.js project](https://github.com/viljamis/nuxt-design-system)
- [Using Vue Design System as NPM Dependency on a static website](https://github.com/viljamis/vue-design-system-example-website)

## Roadmap

- See [Roadmap tag](https://github.com/viljamis/vue-design-system/issues?q=is%3Aissue+is%3Aopen+label%3Aroadmap) in the issues.

## Changelog

- `3.5.7` is the latest release.
- See [Releases page](https://github.com/viljamis/vue-design-system/releases) for the full changelog.

## Need more help?

About to get started with a new design system? I’m an independent designer and developer, specialized in helping companies to build [design systems](https://vueds.com). I also conduct [design system workshops](https://viljamis.com/2018/vue-design-system/) and do consulting. [Let’s talk!](https://twitter.com/viljamis)

## Authors and License

[Viljami Salminen](https://viljamis.com), [Artem Sapegin](http://sapegin.me), [Rafael Escala](https://github.com/rafaesc), [react-styleguidist contributors](https://github.com/styleguidist/react-styleguidist/graphs/contributors), [vue-styleguidist contributors](https://github.com/vue-styleguidist/vue-styleguidist/graphs/contributors), [Vue.js contributors](https://github.com/vuejs/vue/graphs/contributors), [vue-webpack-boilerplate contributors](https://github.com/vuejs-templates/webpack/graphs/contributors), [Theo contributors](https://github.com/salesforce-ux/theo/graphs/contributors), and [Polaris contributors](https://github.com/Shopify/polaris).

Licensed under the [MIT license](https://github.com/viljamis/vue-design-system/blob/master/LICENSE).

[junta de andalucía]: https://juntadeandalucia.es/index.html
[manual de identidad corporativa]: https://juntadeandalucia.es/organismos/presidenciaadministracionpublicaeinterior/areas/comunicacion-social/identidad-corporat-JdA.html
[sistema de diseño del modelo de servicios digitales]: http://lajunta.es/msdsistemadiseno
