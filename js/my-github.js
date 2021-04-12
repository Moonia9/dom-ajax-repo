// Write code here to communicate with Github
//Requirement 1

const myUser = "Moonia9";
const getReposGithub = `https://api.github.com/users/${myUser}/repos`;

function fetchGithubLink(api) {
  const getRepos = `${api}`;
  fetch(getRepos)
    .then(function(response) {
      return response.json();
    })
    .then(function(repos) {
      console.log(repos);
      const reposList = document.querySelector("#repos-list");
      const reposArray = Array.from(repos);
      const reposLength = reposArray.length;
      document.querySelector("#repos-count").innerHTML = reposLength;

      reposArray.forEach(object => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.setAttribute("href", object.html_url);
        a.innerHTML = object.name;
        li.appendChild(a);
        reposList.appendChild(li);
      });
      return repos;

      //   for (let i = 0; i < repos.length; i++) {
      //     const repo = repos[i];
      //     const repoElement = document.createElement("li");
      //     let a = document.createElement("a");
      //     a.setAttribute("href", repo.html_url);
      //     a.innerHTML = repo.name;
      //     repoElement.appendChild(a);
      //     reposList.appendChild(repoElement);
      //     let counter = document.getElementsById("repos-count");
      //     counter.innerHTML = repos.length;
      //     li.appendChild(a);
      //     counter.appendChild(li);
      //   }
      //   return repos;
    });
}

fetchGithubLink(getReposGithub);
