Most used Git commands:
- mkdir: create new directory
- cd: navigate through directory
- git init: create new repository and data structure to track project's version control
- git add: move changes from local to staging
- git commit: save changes added using git add
- git log: browse previous changes
- git branch: create new branch or view branches created
- git checkout: move working branch
- git merge: merge feature branch into working branch. Example => while in working branch, execute "git merge feature_branch" to merge feature branch into working branch. Working branch is not necessary to be main branch
- git status: see files status in the workin directory (mostly used to check added files)

Other Git commands:
- git reset: reset all changes. use with --hard flag to remove all added changes and return working directory state to last commit HEAD
- git clone: copy a repository into a local directory
- git pull: fetch changes from remote repository. Need to match the branch first
- git push: push the local repository commited changes to remote repository
- git version: show git version
- git diff: show changes between commits or branches
- git revert: revert last commit by creating a new commit
- git config: do configuration on local git, usually username and email for auth when pushing commits
- git remote: associated with remote repo. Have several more options:
+ remote add: add new remote repo
+ remote -v: view all remote repo listed in local repo
+ remote rename: rename a remote repo
+ remote rm: remove a remote repo
- git format-patch: generates patches for email submission
- git request-pull: generate summary of pending changes
- git send-email: send collection of patches to an email
- git am: applies patches to a repo
- git daemon: exposes repositories via the Git:// protocol. The Git protocol is a lightweight protocol designed for efficient communication between Git clients and servers.
- git instaweb: instantly launches a web server to browse repositories. It provides a simplified way to view repository contents through a web interface without the need for configuring a full web server.
- git rerere: reuses recorded resolution of previously resolved merge conflicts. Please note that rerere.enabled configuration option needs to be set to "true" (git config –global rerere.enabled true) for git rerere to work. Additionally, note that git rerere only applies to conflicts that have been resolved using the same branch and commit.