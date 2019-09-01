# TODO:
* Production webpack config file.
* It needs to have the mini-css-extract-plugin.
* Add it and notice how your page load time shrinks.
* Same needs to happen with js files. Use uglifyjsplugin.

# Things to not forget:
* All images need an alt tag...
* Partials need to be manually updated. Changing the content file won't affect them. Need to figure out how to achieve that with Webpack
* You have a heavy font loaded that is not being used.
* Jquery is laoded but you are not using it.

# Bugs
* Very subtle bug and probably not a use real case but would like to fix:
  menu can disappear if you toggle it on and off in mobile screen width. Then expand to desktop screen size.
  can be fixed with some more javascript that untoggles things on screen resize...

# Credits when you are done:
* http://www.freeimages.co.uk/linktous.htm
* Amanda if you end up using her pictures.
* All the unsplash images.
