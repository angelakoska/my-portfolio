const profileCard = document.querySelector('#github-profile');

if (profileCard) {
  fetch('https://api.github.com/users/angelakoska', {
    headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2026-03-10'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`GitHub request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then(profile => {
      const avatar = document.createElement('img');
      avatar.src = profile.avatar_url;
      avatar.alt = `${profile.login}'s GitHub profile photo`;
      avatar.width = 80;
      avatar.height = 80;

      const details = document.createElement('div');
      details.className = 'github-profile-details';

      const name = document.createElement('h4');
      name.textContent = profile.name || profile.login;

      const username = document.createElement('p');
      username.textContent = `@${profile.login}`;

      const bio = document.createElement('p');
      bio.textContent = profile.bio || 'No bio is listed on my GitHub profile.';

      const repositories = document.createElement('p');
      repositories.textContent = `Public repositories: ${profile.public_repos}`;

      const profileLink = document.createElement('a');
      profileLink.href = profile.html_url;
      profileLink.textContent = 'View my full GitHub profile';

      details.append(name, username, bio, repositories, profileLink);
      profileCard.replaceChildren(avatar, details);
    })
    .catch(() => {
      const errorMessage = document.createElement('p');
      errorMessage.setAttribute('role', 'status');
      errorMessage.textContent =
        'My GitHub profile could not load right now. You can still use the profile link above.';
      profileCard.replaceChildren(errorMessage);
    });
}
