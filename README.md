# Portfolio

### Generate `style.css` file by compiling scss files
```
sass --watch assets/styles/style.scss:style.css
```
** For run this command compile all scss styles,  you must have to install [Ruby Gem](https://rubygems.org/) and [SASS](http://sass-lang.com/) previously in your local machine. **


> All assets file like images , javascripts , scss including third-party libraries will be in the `assets` folder. Only markup files ( .html , .php , .rb , .asp ...) and main style sheet ( style.css which will come in after compiling scss files ).


# Assets directory definition

* **image/** - Contains all images
* **plugins/** - All third-party libraries like wow.js , animate.css , bootstrap will be here. By default this framework included 4 libraries. They are -
  * [Twitter Bootstrap](https://github.com/twbs/bootstrap) - The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.
  * [jquery](https://github.com/jquery/jquery) - Javascript library for make javascript easy

* **styles/**
  * **style.scss** - Contains all scss pertials
  * **abstracts/**
    * **_functions.scss** - This file contains all application-wide Sass functions.
    * **_mixins.scss** - This file contains all application-wide Sass mixins.
    * **_mixins.scss** - This file contains all application-wide Sass mixins.
    * **_variables.scss** - This file contains all application-wide Sass variables.
  * **base/**
    * **_base.scss** - This file contains very basic styles.
    * **_fonts.scss** - This file contains all @font-face declarations, if any.
    * **_helpers.scss** - This file contains CSS helper classes.
    * **_typography.scss** - Basic typography style for copy text  
   * **components/** - This directory will holds your project's components partials scss files such as `_buttons.scss` , `_tab.scss` , `_accordion.scss` ...
   * **layout/** - This directory contains all styles of application layouts such as `_header.scss` , `_sidebar.scss` etc...
   * **pages/** - Page specific scss partials file will be here.
   * **themes/** - If your project has several theme , then these theme specified scss pertials will be here.
