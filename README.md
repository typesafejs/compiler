# Dev Notes
Need top-level dev dependencies to match those in eslint-config

This is so that we can apply the same rules to this project as we are exporting.

The issue that causes this is ESLint only looks for plugins and extensions in the main node_modules - it does not search recursively.