const user = {
    avatarUrl:'',
    name:'',
    bio:'',
    userName:'',
    repositories:[],
    forks:'',
    star:'',
    watchers:'',
    language:'',
    followers:'',
    following:'',
    events:[],
    
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.userName = gitHubUser.login;
        this.followers = gitHubUser.followers;
        this.following = gitHubUser.following;
        this.forks = gitHubUser.forks;
        this.star = gitHubUser.stargazers_count;
        this.watchers = gitHubUser.watchers;
        this.language = gitHubUser.language;
    },
    setRepositories(repositories){
        this.repositories = repositories;
    },
    setEvents(events){
        this.events = events;
    }
}

export{user}