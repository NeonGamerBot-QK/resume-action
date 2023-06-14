# Resume Generator

a github action which generates your own resume based on your info in github.

### Example workflow
```yml
name: Make Resume

on: [push]

jobs:

  test-action:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: make-resume
        uses: NeonGamerBot-QK/resume-action@v0
        with:
          github_user_name: ${{ github.repository_owner }}
      - name: push resume to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```