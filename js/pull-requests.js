//Second Requirement
const myUser = "Moonia9";
let getPullRequestsGithub = `https://api.github.com/users/${myUser}/repos`;

function fetchGithubLink(apiLink) {
  let repositories = `${apiLink}`;
  fetch(repositories)
    .then(response => response.json())
    .then(data => {
      let reposArray = Array.from(data);
      let reposList = document.querySelector("#pull-requests-list");

      reposArray.forEach(object => {
        let firstLi = document.createElement("li");
        let ul = document.createElement("ul");
        let repositoriesNames = object.name;
        let pullsRequests = `https://api.github.com/repos/${
          object.full_name
        }/pulls`;

        fetch(pullsRequests)
          .then(response => response.json())
          .then(data => {
            let pullsArray = Array.from(data);
            let pullsLength = pullsRequests.length;

            ul.innerHTML = `${repositoriesNames} - Pulls (${pullsLength}) times`;

            pullsArray.forEach(object => {
              let li = document.createElement("li");
              let a = document.createElement("a");
              a.innerHTML = object.title;
              a.href = object.html_url;
              li.appendChild(a);
              ul.appendChild(li);
            });
            firstLi.appendChild(ul);
            reposList.appendChild(firstLi);
            return data;
          });
      });
      return data;
    });
}

fetchGithubLink(getPullRequestsGithub);
