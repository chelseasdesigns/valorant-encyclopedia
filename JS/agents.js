fetch('https://valorant-api.com/v1/agents')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
    const agentContainer = document.querySelector('.agentContainer');
    const agents = data.data;

    agents.forEach(agent => {
      if (agent.isPlayableCharacter === true) {
        const agentName = `<h2>${agent.displayName}</h2>`;
        const agentImage = `<img src="${agent.displayIcon}" alt="${agent.displayName}">`;

        const agentElement = document.createElement('div');
        agentElement.classList.add('agent');
        agentElement.innerHTML = agentName + agentImage;

        agentContainer.appendChild(agentElement);
      }
    });
  })
  .catch(error => console.log(error));
