# Learning github actions


The application just print 'I am grook' into the console. Runs within a docker container named `githubactionslearn`

The package is scoped to a repository [documentation here](https://docs.github.com/en/packages/learn-github-packages/connecting-a-repository-to-a-package)

## Workflow

The wokflow is based on the [Publish Docker Container](https://github.com/yrfonfria/githubactionslearn/new/master?filename=.github%2Fworkflows%2Fdocker-publish.yml&workflow_template=ci%2Fdocker-publish) action

Tweaks:
 - schedule removed
 - GITHUB_TOKEN replaced by NPM_TOKEN and this token was stored as a repository secret.
