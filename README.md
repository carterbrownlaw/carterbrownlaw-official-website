TODO:
        Production webpack config file.
        It needs to have the mini-css-extract-plugin.
        Add it and notice how your page load time shrinks.
        Same needs to happen with js files. Use uglifyjsplugin.

Things to not forget:
        All images need an alt tag...
        Partials need to be manually updated. Changing the content file won't affect them. Need to figure out how to achieve that with Webpack
        You have a heavy font loaded that is not being used.
        Jquery is laoded but you are not using it.
