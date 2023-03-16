# Learning github actions

Learning github actions via sample `echo server` service with the follwing requirements:

- service is written in nodejs
- service must habe unit tests and integration tests
- service will run in a container 
- service integration tests must run against the container version build in the pipeline.
- image is published to ghcr.io

The package is scoped to a repository [documentation here](https://docs.github.com/en/packages/learn-github-packages/connecting-a-repository-to-a-package)

## Workflow notes (main.yaml)

The wokflow is based on the [Publish Docker Container](https://github.com/yrfonfria/githubactionslearn/new/master?filename=.github%2Fworkflows%2Fdocker-publish.yml&workflow_template=ci%2Fdocker-publish) action

Tweaks:
 - schedule removed
 - GITHUB_TOKEN replaced by NPM_TOKEN and this token was stored as a repository secret.

Workflow depends on third party action `trainingspaces/semver@v0.0.18` which is a custom action written to get the semver from package.json [Semver repository](https://github.com/trainingspaces/semver)

This tag was added to the Extract Metadata action to guarantee the `run number` and `run attempt` are part of the image name in order to guarantee uniqueness.

```yaml
tags: |
    type=semver,pattern={{version}},value=${{ steps.semver.outputs.version }}-${{ github.run_number}}-${{ github.run_attempt }}
```

The `CONTAINER_NAME` environment variable is just a helper to run the service integration tests agains the container.


## Workflow notes (tagging.yaml)

This workflow creates a tag using `trainingspaces/semver@v0.0.18` when the pull request is closed and merged. To achieve this behavior we do:

- trigger on the `pull_request` event.
- set the `type` to `close`
- set the `branches` to `main`

That guarantees the workflow runs on pull_requests that closes on the main branch, additionally the condition on all the steps for this workflow

```
if: github.event.pull_request.merged == true
```
this condition enforce these actions will run only if the pull request was merged in main branch.
