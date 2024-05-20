const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="foto do perfil do usuário"/>
                                        <div class="data">
                                            <h1>${user.name ?? 'não possui nome cadastrado😭'}</h1>
                                            <p>${user.bio ?? 'não possui bio cadastrada😭'}</p>
                                            <p>👥Seguidores: ${user.followers ?? null}</p>
                                            <p>👥Seguindo: ${user.following ?? null}</p>
                                        </div>
                                      </div>`;

        let repositoriesItems = '';
        user.repositories.forEach(repo => {
            repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
                                  <div>
                                      <li>🍴${repo.forks}</li>
                                      <li>⭐${repo.stargazers_count}</li>
                                      <li>👀${repo.watchers}</li>
                                      <li>💻${repo.language}</li>
                                  </div>`;
        });
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                              <h2>Repositórios</h2><br>
                                              <ul>${repositoriesItems}</ul>
                                           </div>`;
        }

        let filteredEvents = user.events.filter(event => event.type === 'PushEvent' || event.type === 'CreateEvent');
        let eventsItems = '';
        filteredEvents.forEach(event => {
            let githubUrl = event.repo.url.replace('https://api.github.com/repos', 'https://github.com');

            eventsItems += `<li><a href="${githubUrl}" target="_blank">${event.repo.name} - ${event.type}</a></li>`;
        });

        if(filteredEvents.length > 0){
            this.userProfile.innerHTML += `<div class="section">
                                              <h2>Eventos</h2>
                                              <ul>${eventsItems}</ul>
                                           </div>`;
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>";
    }
}

export { screen }
