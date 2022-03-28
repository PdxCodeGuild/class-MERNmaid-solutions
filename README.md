# Advanced Node & React lab solutions

This is where students will turn in their work and where solutions will be posted.

## How to turn in work

To practice real-world workflows, students are required to create new branches on git for their labs, and then open up a Pull Request when they want to "turn in" their work.

The instructor can then perform a Code Review and decide whether or not to merge in the students code, or whether to leave comments about how to clean things up. Once again, this is to practice a workflow that closely mimics industry practice.

Students are not allowed to directly push to master. They **must** open a pull request.

### Folder Structure

To organize your labs, create a new folder for each section (javascript, express, react) then create a folder for each lab within its section (lab-1, lab-1, etc..).

Example:

```
Anthony
└── javascript
   └── lab-1
      └── main.js
```

<h2>Creating a new branch:</h2>
<details>
<summary>Click to expand</summary>



- `git branch` to check that you're on the main branch, use `git checkout main` to go to the main branch if needed.

- `git status` to check if your local main branch is up to date with origin/main on Github.
  
- `git pull` if needed to pull any recent changes to your local repository

- Create a new branch and switch to it.
  - Option 1:
    - `git branch <YOUR_NAME-SECTION-LAB_NUMBER>`
    - `git checkout <YOUR_NAME-SECTION-LAB_NUMBER>`
  
  - Option 2:
  
    The `-b` flag can be used after the `checkout` command to combine these two steps:

    `git checkout -b <YOUR_NAME-SECTION-LAB_NUMBER>`
  
  **e.g.** My branch for the **"Lab 01 - Refresher"** in the **JavaScript** section would be named: `anthony-javascript-lab01`. The name can vary a bit from this example, but please keep the chosen formatting consistent from one lab to another.

- `git add <FILENAME>` to add a specific file or `git add .` to add everything in the current dicrectory
  
- `git commit -m "your commit message"` to commit your work

- A remote branch will need to be created for each new local branch. Git will usually display the proper command to do this when a new branch is pushed for the first time.

  The command is:

  `git push --set-upstream origin <BRANCH_NAME>`

  **OR**

  `git push -u origin <BRANCH_NAME>`
  

- After successfully pushing your new branch to Github, you should see the option to create a Pull Request for your branch on the main repo page.

- If you don't see that message, you'll have to navigate to your new remote branch

- Once you've navigated to your individual branch, you'll find the option to create a Pull Request in the "Contribute" dropdown.

- Click the "Open Pull Request" button. Add a comment to your Pull Request like "Submitting Lab 00" and click "Create Pull request"

## Updating a branch
<details>
<summary>Click to expand</summary>
After a Pull Request is submitted, the code on that branch will be checked. 

Necessary corrections or adjustments will be posted as comments on the Pull Request on Github and the Pull Request will be closed. When the corrections are made, submit the Pull Request again for checking.

Corrections will be made only to that particular branch.

- `git checkout <YOUR_NAME-SECTION-LAB_NUMBER>`

- Add and commit updated files.

- `git push` to push your changes up to the remote repository on GitHub

- Only one Pull Request is allowed per branch.
  
  - If a Pull Request is already open for the branch, a message will be added to the current Pull Request for the new commits.
  - If a Pull Request is not already open for the branch a new Pull Request will need to be created.

- Once a lab is complete, its branch will be merged into the `main` branch.
</details>