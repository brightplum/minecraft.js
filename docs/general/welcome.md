<div>
<img src="https://i.imgur.com/OiUf0s3.png" style="height: 25%; width: 25%; margin-left: 37.5%; margin-right: 37.5%; ">
<img src="https://i.imgur.com/lMJAXkC.jpg" style="margin-top: 5%; width: 75%; margin-left: 12.5%; margin-right: 12.5%;">
<h3>Minecraft API Wrapper (Hypixel, Mojang, etc.)</h3>
</div>

[![Discord](https://img.shields.io/discord/823637407449481219?color=%237289DA&style=for-the-badge)](https://discord.gg/n5TpKjss52)
[![GitHub issues](https://img.shields.io/github/issues/brightplum/minecraft.js?style=for-the-badge)](https://github.com/brightplum/minecraft.js/issues)
[![Repository License](https://img.shields.io/github/license/brightplum/minecraft.js?style=for-the-badge)](https://github.com/brightplum/minecraft.js/blob/main/LICENSE)
[![File Size](https://img.shields.io/github/repo-size/brightplum/minecraft.js?label=size&style=for-the-badge)](https://github.com/brightplum/minecraft.js)

## Installation
```
npm install minecraft.js
```
## Usage
```js
const MCAPI = require('minecraft.js');

const mojang = new MCAPI.MojangClient();
const hypixel = new MCAPI.HypixelClient('apikey');
const hive = new MCAPI.HiveClient();

async function getStuff() {
  // Get Mojang App
  const app = await mojang.getMojangApp();

  console.log(app.status) // Expected: "OK"

  // Get Player UUID
  const player  = await mojang.getPlayer('name', 'GamerCoder215');

  console.log(player.uuid) // Expected: 8069233e5b25410c9475daa6a044c365

  // Get Hypixel Player
  const hyplayer = await hypixel.getHypixelPlayer(player.uuid);
  // Must be a UUID or will not work

  console.log(hyplayer.username) // Expected: GamerCoder215
}

getStuff();
```
