# P2P Chat

[![build](https://github.com/meyer1994/p2p-chat/actions/workflows/build.yml/badge.svg)](https://github.com/meyer1994/p2p-chat/actions/workflows/build.yml)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

To learn [libp2p][1]

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)

## About

This is a simple hobby project used to create a distributed chat application on
top of libp2p. It is very limited.

:warning: All your messages are public. Anyone connected to the topic used will
receive all the messages published to it.

## Install

This project uses [vue][2] for the frontend. [Sakura][3], because I am lazy.
And libp2p for all the communication stuff.

```
npm install
```

## Usage

To run the development server:

```
npm run serve
```

It will start a server on `localhost:8080`. It should connect to the live
version on the repo's [page][4].

[1]: https://libp2p.io/
[2]: https://vuejs.org/
[3]: https://github.com/oxalorg/sakura
[4]: https://meyer1994.github.io/p2p-chat/
