const Card = card => {
  return `
        <li>
            <div class="ui card">
            <div class="image">
                <img src="${card.avatar_url}">
            </div>
            <div class="content">
                <a class="header" href="${card.html_url}">${card.login}</a>
                <div class="description">
                    <p>Public Repos: ${card.public_repos}</p>
                    <p>Bio: ${card.bio}</p>
                </div>
            </div>
            </div>
        </li>
        `;
};

export default Card;