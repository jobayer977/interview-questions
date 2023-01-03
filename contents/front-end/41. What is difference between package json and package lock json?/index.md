---
title: What is difference between package json and package lock json?
source: https://www.geeksforgeeks.org/difference-between-package-json-and-package-lock-json-files/
---

In NodejS we have two files package.json and package-lock.json. Both files are used to manage dependencies of a project. But there is a difference between them.

**Difference in Tabular Form**
| package.json | package-lock.json |
| :-------------------------------------------------------- | :------------------------------------------------------------- |
| It contains basic information about the project. | It describes the exact tree that was generated to allow subsequent installs to have the identical tree. |
| It is mandatory for every project. | It is automatically generated for those operations where npm modifies either node_modules tree or package.json. |
| It records important metadata about the project. | It allows future devs to install the same dependencies in the project.
| It contains information such as name, description, author, script, and dependencies. | It contains the name, dependencies, and locked version of the project.
