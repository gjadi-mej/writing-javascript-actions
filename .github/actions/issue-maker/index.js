const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
        const issueTitle = core.getInput("issue-title");
        const issueBody = core.getInput("joke");
        const token = core.getInput("repo-token");

        const octokit = github.getOctokit(token);

        const newIssue = await octokit.issues.createIssue({
            title: issueTitle,
            body: issueBody,
            repo: github.context.repo.repo,
            owner: github.context.repo.owner,
        });
    } catch (err) {
        core.setFailed(err.message);
    }
}

run ();
