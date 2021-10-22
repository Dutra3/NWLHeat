const linksSocialMedia = {
    github: 'dutra3',
    youtube: '',
    facebook: '',
    instagram: 'gabrieldutra3',
    twitter: 'home'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

        alert(li.children[0].href)

    }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url).then()

}

getGitHubProfileInfos();