[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/PMK744/Node-BEWSS">
    <img src="https://cdn.discordapp.com/attachments/828904375338008596/859298259942899712/bewss-logo.png" alt="Logo" width="80" height="80">
  </a>
  
  <h3 align="center">Node-BEWSS</h3>

  <p align="center">
    Node-BEWSS is a tool to make interfacing with websockets on MCBE easy!
    <br />
    <a href="https://github.com/PMK744/Node-BEWSS"><strong><!--Explore the docs »-->Docs Coming soon...</strong></a>
    <br />
    <br />
    <a href="https://github.com/PMK744/Node-BEWSS">View Demo</a>
    ·
    <a href="https://github.com/PMK744/Node-BEWSS/issues">Report Bug</a>
    ·
    <a href="https://github.com/PMK744/Node-BEWSS/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#minecraft-websockets">Minecraft Websockets</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Node-BWSS is a tool, which makes it easier for you to interact with Minecraft Bedrock Edition Websockets in Typescript/NodeJS. Many of you may not have heard of Websockets in MCBE or might not have known much about it. This is because websockets for MCBE are not really documented. We are planning to change that and bring this amazing tool out to the public.


### Minecraft Websockets
* Minecraft Bedrock Edition uses websockets for interprocess communication we can connect to these sockets with the commands `/connect` and `/wsserver` in-game (both of these commands have the same effect). Once connected to the websocket, the connection will not close until either the game is closed or some other 3rd part interruption. The connection will however stay open when say a player leaves a singleplayer world and joins another server.
Websockets in Minecraft can be used for simple command communication between a player and a server. Additionally, the server can choose to
listen for certain events sent by the client and act upon receiving them.

* In order to be able to execute the `/connect` and `/wsserver` commands, cheats must be enabled. This means that connecting on third party
servers is not possible, and only on the dedicated servers when cheats are enabled. It is possible to connect on a singleplayer world and
join a server after that, but commands executed by the websocket server will not work. Events will still be sent by the client however.


### Built With

* Node-BEWSS is based off of [mcwss](https://github.com/Sandertv/mcwss), but written in Typescript.



<!-- GETTING STARTED -->
## Installation

  -   You need [Node.js](https://nodejs.org) v14.x and [npm](https://www.npmjs.com).
  -   Download or clone the repository `git clone https://github.com/PMK744/node-mcwss.git`.
  -   Install dependencies `npm install`
  -   Before running production build you have to build it `npm run build`
  -   You're done! You can run it using `npm run start` or `node .` (or `npm run dev` for development)
  -   Check `src/index.ts` for basic usage examples.



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/PMK744/Node-BEWSS/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

You can share your amazing talent with other people! Any Contributions are **greatly appreciated**. 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Discord - [Node-BWSS Discord Server](https://discord.gg/RmepVTQfEg)

Project Link: [https://github.com/PMK744/Node-BEWSS](https://github.com/PMK744/Node-BEWSS)


## Acknowledgements

* _[Documentation Coming soon...](https://github.com/PMK744/Node-BEWSS)_


[contributors-shield]: https://img.shields.io/github/contributors/PMK744/Node-BEWSS.svg?style=for-the-badge
[contributors-url]: https://github.com/PMK744/Node-BEWSS/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/PMK744/Node-BEWSS.svg?style=for-the-badge
[forks-url]: https://github.com/PMK744/Node-BEWSS/network/members
[stars-shield]: https://img.shields.io/github/stars/PMK744/Node-BEWSS.svg?style=for-the-badge
[stars-url]: https://github.com/PMK744/Node-BEWSS/stargazers
[issues-shield]: https://img.shields.io/github/issues/PMK744/Node-BEWSS.svg?style=for-the-badge
[issues-url]: https://github.com/PMK744/Node-BEWSS/issues
[license-shield]: https://img.shields.io/github/license/PMK744/Node-BEWSS.svg?style=for-the-badge
[license-url]: https://github.com/PMK744/Node-BEWSS/blob/main/LICENSE
