link-components : ; npm link @standardkit/angular-components
link-styles : ; npm link @standardkit/styles
link-themes : ; npm link @standardkit/themes

link : ; make link-components && make link-themes && make link-styles

unlink : ; npm install
