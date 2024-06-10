## How to do Setup

1. Fork the repository
[Example](https://postimg.cc/6yv5phKx).

2. Clone your forked repository of project in VsCode terminal or gitbash.
[Example](https://postimg.cc/cKyBKhPq)

```git clone
git clone <you fork repository Link>
```

3. Navigate to the project directory.

```
cd folderName
 ```

4. Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/kushalkumar1362/employement-portal-talentGro.git
```

5. Check the remotes for this repository.

```
git remote -v
```

6. Always take a pull from the upstream repository to your main branch to keep it updated as per the main project repository.

```
git pull upstream main
```

7. Create a new branch .

```
git checkout -b <YOUR_BRANCH_NAME>
```

- Install node_modules

```
npm i 
```

- Run the Website

```
npm run start
```

8. Perform your desired changes to the code base.

9. Check your changes.

```
git status
```

```
git  diff
```

10. Stage your changes.

```
git add --a
```

11. Commit your changes.

```
git commit -m "relavant message"
```

12. Push the committed changes in your feature branch to your remote repository.

```
git push -u origin <your_branch_name>
```

16. Open a gitHub repostories, To create a pull request, click on `compare and pull requests`.

17. Add an appropriate title and description to your PR explaining your changes.

18. Click on `Create pull request`.

# Contributors

<a href="https://github.com/kushalkumar1362/employement-portal-talentGro/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=kushalkumar1362/employement-portal-talentGro" alt="Contributors" />
</a>
