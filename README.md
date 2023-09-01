This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It requires Node.js version 18.0.0 or higher.

## Getting Started

First rename the `.env.sample` file to `.env`.

Next run
```bash
npm install
```

Run the app by running the following command
```bash
npm run start:all
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

To run the tests run the following command
```bash
npm test
```

## Helper methods

`extractSubstring` takes two arguments `text` and `regex` and returns the result of matching the input text against the regex. If there is no match or the arguments' types are wrong (or no arguments are provided) it returns an empty string.

`getCountryOfOrigin` extracts the country from the shipowner name provided as the argument.