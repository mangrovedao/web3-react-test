# React Exercise: Mangrove Token Faucet

## Introduction
This exercise aims to evaluate your proficiency in React and your ability to interact with Ethereum contracts using the Web3 library of your choice.

## Prerequisites
Before you begin this exercise, you need:

- To create an account on WalletConnect and obtain a projectId. The projectId is used to initialize WalletConnect and establish a connection to the Ethereum network. After obtaining your projectId, please go to the `.env.local` file and set the `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` variable to your projectId.
- An Ethereum wallet (e.g., MetaMask) installed on your browser.
- A MetaMask account configured for the Polygon Mumbai testnet (Chain ID 80001). You can find instructions on how to set it up [here](https://www.datawallet.com/crypto/add-polygon-mumbai-to-metamask).
- A free Alchemy account to access Ethereum data. You can sign up for an account [here](https://www.alchemy.com/).

## Objective
Your task is to create a faucet page to mint Mangrove tokens. The information about these tokens is available in the `/tokens/mangrove-tokens.json` file. You will also need to interact with an Ethereum contract, the ABI of which is provided in the `/tokens/abi.json` file.

## Instructions
1. Set up a Web3 library of your choice to interact with Ethereum contracts.
2. Create a faucet page that allows users to select a Mangrove token from a list (based on the data in `/tokens/mangrove-tokens.json`), enter the amount they want to mint, and submit this request.
3. When a request is submitted, call the appropriate function of the Ethereum contract using the ABI in `/tokens/abi.json`.

## Requirements
- You can use any library you find useful for this project.
- You are free to structure your code as you see fit, but keep in mind that we value well-organized, readable, and maintainable code.
- You can use the internet for research and troubleshooting. Feel free to consult documentation, discussion forums, and blog articles for help.
- You can use any Web3 library to interact with Ethereum contracts.

## Deliverables
At the end of this exercise, please submit:
- The source code of the React application.
- A README file explaining how to run the application.
- Any other documentation you deem necessary.

## Evaluation
Your work will be evaluated based on:
- Compliance with the requirements.
- The quality of your code: clarity, readability, organization, and best practices.
- Your ability to interact with an Ethereum contract using a Web3 library.
- The usability and aesthetics of the faucet page.

Good luck!


# Boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
