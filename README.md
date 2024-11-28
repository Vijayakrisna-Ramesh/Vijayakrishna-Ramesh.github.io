# Personal Profile Page

This repository contains the source code for my personal profile page. The page showcases my professional background, skills, projects, and blog articles.

## Purpose

The purpose of this repository is to provide a platform to share my work, thoughts, and experiences with a wider audience. It includes various sections such as About Me, Skills Overview, Notable Projects, and Featured Blogs.

## Deployment

The static content of this repository is deployed to GitHub Pages using GitHub Actions. The deployment process is automated and triggered on every push to the `main` branch.

### Deployment Instructions

1. **Ensure you have the necessary permissions**: Make sure you have the required permissions to push changes to the `main` branch of this repository.

2. **Make your changes**: Edit the files in the repository as needed. Commit and push your changes to the `main` branch.

3. **GitHub Actions Workflow**: The GitHub Actions workflow defined in `.github/workflows/static.yml` will automatically run and deploy the changes to GitHub Pages.

4. **Check the deployment status**: You can check the status of the deployment in the Actions tab of the repository. If the workflow runs successfully, your changes will be live on GitHub Pages.

### Workflow Details

The GitHub Actions workflow for deploying static content to GitHub Pages is defined in `.github/workflows/static.yml`. The workflow includes the following steps:

- **Checkout**: Checks out the repository code.
- **Setup Pages**: Configures the GitHub Pages environment.
- **Upload Artifact**: Uploads the static content as an artifact.
- **Deploy to GitHub Pages**: Deploys the static content to GitHub Pages.

The deployment environment is named `github-pages` and the URL is set to `${{ steps.deployment.outputs.page_url }}`.

## License

This repository is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
