import { Hono } from "hono";

type Expenses = {
  id: string;
  title: string;
  amount: number;
};

const fakeExpenses: Expenses[] = [
  { id: "1", title: "Car Insurance", amount: 294.67 },
  { id: "2", title: "Rent", amount: 1000 },
  { id: "3", title: "Groceries", amount: 200 },
];

export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post("/", async (c) => {
    const expense = await c.req.json();
    console.log({ expense });
    return c.json(expense);
  });
