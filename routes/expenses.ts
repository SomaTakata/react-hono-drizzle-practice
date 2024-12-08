import { Hono } from "hono";
import { z } from "zod";

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

const createPostSchema = z.object({
  title: z.string().min(3).max(100),
  amount: z.number().int().positive(),
});

export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post("/", async (c) => {
    const data = await c.req.json();
    const expense = createPostSchema.parse(data);
    console.log(expense.amount);
    console.log({ expense });
    return c.json(expense);
  });
