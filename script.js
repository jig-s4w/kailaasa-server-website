const discordServer = "arVxdYDktb"

const discordCount = document.querySelector(".discord-members-count")


fetch( `https://discord.com/api/v9/invites/${discordServer}?with_counts=true&with_expiration=true`)
  .then((response) => response.json())
  .then((data) => discordCount.textContent = data.approximate_member_count);
  

setInterval(()=>{
    fetch( `https://discord.com/api/v9/invites/${discordServer}?with_counts=true&with_expiration=true`)
    .then((response) => response.json())
    .then((data) => discordCount.textContent = data.approximate_member_count);
},10000)

  