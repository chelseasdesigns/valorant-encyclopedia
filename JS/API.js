//API Source: https://valorant-api.com 
//API Link: https://valorant-api.com/v1/agents

const agentName = document.querySelector('[agentName]');
const agentRole = document.querySelector('[agentRole]');
const agentDescription = document.querySelector('[agentDescription]');
const agentVoiceLine = document.querySelector('[agentVoiceLine]');
const agentImg = document.querySelector('[agentImg]');
const agentAbility1 = document.querySelector('[agentAbility1]');
const agentAbility1Desc = document.querySelector('[agentAbility1Desc]');
const agentAbility1IMG = document.querySelector('[agentAbility1IMG]');
const agentAbility2 = document.querySelector('[agentAbility2]');
const agentAbility2Desc = document.querySelector('[agentAbility2Desc]');
const agentAbility2IMG = document.querySelector('[agentAbility2IMG]');
const agentAbility3 = document.querySelector('[agentAbility3]');
const agentAbility3Desc = document.querySelector('[agentAbility3Desc]');
const agentAbility3IMG = document.querySelector('[agentAbility3IMG]');
const agentUltimate = document.querySelector('[agentUltimate]');
const agentUltimateDesc = document.querySelector('[agentUltimateDesc]');
const agentUltimateIMG = document.querySelector('[agentUltimateIMG]');


const agentError = document.querySelector('[agentError]');


const search = event => {
    event.preventDefault();
    fetch(`https://valorant-api.com/v1/agents`)
    .then(response => response.json())
    .then(response => outVALAgent(response))
    .catch(err => noValAgent())
    }

const fetchAgents = () => {
    fetch("https://valorant-api.com/v1/agents")
      .then(response => response.json())
      .then(data => displayAgents(data.data))
      .catch(error => console.error(error));
  };

const outVALAgent = data => {
    const agentInput = document.querySelector('#input').value;
    const agent = data.data.find(agent => agent.displayName.toLowerCase() === agentInput.toLowerCase());

    if (agent) {
      agentName.textContent = `${agent.displayName}`;
      agentRole.textContent = `${agent.role.displayName}`;
      agentImg.setAttribute('src', agent.fullPortrait);
      agentVoiceLine.setAttribute('wav', agent.voiceLine.wave);
      agentDescription.textContent = `${agent.description}`;
      
      agentAbility1.textContent = `${agent.abilities.find(ability => ability.slot === "Ability1").displayName}`;
      agentAbility1Desc.textContent = `${agent.abilities.find(ability => ability.slot === "Ability1").description}`;
      agentAbility1IMG.setAttribute('src', agent.abilities.find(ability => ability.slot === "Ability1").displayIcon);

      agentAbility2.textContent = `${agent.abilities.find(ability => ability.slot === "Ability2").displayName}`;
      agentAbility2Desc.textContent = `${agent.abilities.find(ability => ability.slot === "Ability2").description}`;
      agentAbility2IMG.setAttribute('src', agent.abilities.find(ability => ability.slot === "Ability2").displayIcon);

      agentAbility3.textContent = `${agent.abilities.find(ability => ability.slot === "Grenade").displayName}`;
      agentAbility3Desc.textContent = `${agent.abilities.find(ability => ability.slot === "Grenade").description}`;
      agentAbility3IMG.setAttribute('src', agent.abilities.find(ability => ability.slot === "Grenade").displayIcon);
      
      agentUltimate.textContent = `${agent.abilities.find(ability => ability.slot === "Ultimate").displayName}`;
      agentUltimateDesc.textContent = `${agent.abilities.find(ability => ability.slot === "Ultimate").description}`;
      agentUltimateIMG.setAttribute('src', agent.abilities.find(ability => ability.slot === "Ultimate").displayIcon);

    } else {
      noValAgent();
    }
  }

  const noValAgent = () => {
    agentError.textContent = "Error: Could not retrieve agent data.";
  }