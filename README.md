# PINKonomic

[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/kartheekgottipati/pinkonomic/badge)](https://securityscorecards.dev/viewer/?uri=github.com/kartheekgottipati/pinkonomic)

## Social Links

[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/PINKonomic)
[![X (formerly Twitter)](https://img.shields.io/badge/X-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/pinkonomic)
[![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/r/pinkonomic/)
[![Warpcast](https://img.shields.io/badge/Warpcast-000000?style=for-the-badge&logo=warpcast&logoColor=white)](https://warpcast.com/pinkonomic)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/invite/Hn7xKSxZPb)

Welcome to the official website of Polkadot's first meme coin, $PINK! This project is an open-source initiative to bring fun, community-driven experiences to the Polkadot ecosystem.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

PINKonomic is a community-driven project aimed at introducing the PINK gaming universe and spreading positivity within the Polkadot ecosystem. Our goal is to create engaging narratives and fun experiences that attract new users to Polkadot. By making this project open source, we invite developers from around the world to contribute and help us build a vibrant and inclusive community.

## Features

- 🌐 **Interactive Website**: A visually appealing and interactive website built with React and TailwindCSS.
- 🎮 **Gaming Universe**: Multiple blockchain-powered games like Pink Drop, Pinkness Overdrive, Pink Bullet, and Pink-a-mole.
- 📊 **Pinkonomics**: Detailed information about the $PINK tokenomics.
- 🏆 **Tournaments**: Participate in exciting tournaments and win rewards.
- 🚀 **Teleport App**: Seamlessly transfer your PINK tokens between Moonbeam and Base using LayerZero interoperability.
- 🤝 **Community & Partnerships**: Engage with the PINK community and explore our partnerships.

## Getting Started

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/pinkonomic.git
cd pinkonomic
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t pink-website .

# For pnpm
docker build -f Dockerfile.pnpm -t pink-website .

# For bun
docker build -f Dockerfile.bun -t pink-website .

# Run the container
docker run -p 3000:3000 pink-website
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Contributing

We welcome contributions from the community! Whether it's bug fixes, new features, or improvements to the documentation, your help is appreciated. To get started, please fork the repository, create a new branch, and submit a pull request.

### How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by pink volunteers.
