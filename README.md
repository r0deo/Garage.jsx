#  Instructions  🚗:

**Objective:** Create a `Car` component that dynamically displays car information (brand, model, and year) passed as props from a parent `Garage` component. Render multiple `Car` instances with different properties.


## Step 1: Create the Car Component
 1. In your project, create a new file for the `Car` component.
2. Define a `Car` component that accepts props for `brand`, `model`, and `year`.
3. Ensure the `Car` component renders these properties.

## Step 2: Import and Use Car in Garage.jsx

1. Import the `Car` component into `Garage.jsx`.
2. Pass down different sets of `brand`, `model`, and `year` props to at least three instances of the `Car` component within the `Garage` component.

## Step 3: Rendering Props
1. Initially, render the `brand`, `model`, and `year` props directly in the `Car` component.

2. Refactor the component to use **destructuring** to access the props.

## Step 4: Advanced Prop Handling
1. Modify the `Garage` component to store car information within an array.
2. Use the array to render multiple `Car` components dynamically by mapping over the array.






-------------------------------








This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
