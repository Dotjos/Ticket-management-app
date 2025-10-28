# Ticket Management App

Ticketrax is a simple **ticket management web app** built using three different frontend technologies — **React**, **Vue**, and **Twig (PHP)** — to showcase modular frontend development and deployment practices.

## Overview

Each version of Ticketrax allows users to:

- Create, edit, and delete tickets 📝
- View ticket statuses (open, in progress, closed) 🔄
- Experience responsive UI and smooth UX ✨

## Tech Stack

- **Frontend:** React, Vue, Twig (for templating)
- **Styling:** TailwindCSS
- **Storage (local):** LocalStorage
- **Hosting:** Vercel (React & Vue), Railway (Twig)
- **Version Control:** Git & GitHub Monorepo

## 🗂 Project Structure

| Folder                             | Description                      | Hosted URL                                                                  |
| ---------------------------------- | -------------------------------- | --------------------------------------------------------------------------- |
| [`react`](./react)                 | Built with React + Tailwind      | [Live on Vercel](https://ticket-management-app-two.vercel.app/)             |
| [`vue-ticketrax`](./vue-ticketrax) | Built with Vue + Tailwind        | [Live on Vercel](https://ticket-management-app-twpv.vercel.app/)            |
| [`twig`](./Twig)                   | Built with Twig (PHP) + Tailwind | [Live on Railway](https://ticket-management-app-production.up.railway.app/) |

## 🚀 Running Locally

Clone the repo:

```bash
git clone https://github.com/Dotjos/Ticket-management-app.git
cd Ticket-management-app

#React
cd react
npm install
npm run dev

#vue
cd vue-ticketrax
npm install
npm run dev

#
cd Twig
php -S localhost:8000 -t public
```

```

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License

MIT License

## Contact

- GitHub: [@Dotjos](https://github.com/dotjos)
```
