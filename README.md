# Build script assumes you set up dist/static to act as a "pseudo checkout" to gh-pages

``` bash
# set up to do one
  git checkout --orphan gh-pages
  git reset --hard
  git commit --allow-empty -m "Init gh-pages branch"
  git checkout main
  git worktree add dist/static gh-pages

# what is done at the end of the build script
cd dist/static
git commit -a -m "message commit"

# what you need to do in the end
git push gh-pages
```

https://gist.github.com/lajlev/4b1d0207f87d0a8e9cf20fc78a6fd60a
# Notes

Tailwind doesn't work well with ng serve, save tailwind.config.js to reload the code if it bugs.


# PersonalSite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

# Jekyll's commands to test the GitHub pages server in local:

Once jekyll is [installed](https://jekyllrb.com/docs/installation/)

`$ bundle exec jekyll serve`
`$ bundle exec jekyll build`
