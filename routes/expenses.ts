import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

type Expenses = {
  id: number;
  title: string;
  amount: number;
};

const fakeExpenses: Expenses[] = [
  { id: 1, title: "Car Insurance", amount: 294.67 },
  { id: 2, title: "Rent", amount: 1000 },
  { id: 3, title: "Groceries", amount: 200 },
];

const createPostSchema = z.object({
  title: z.string().min(3).max(100),
  amount: z.number().int().positive(),
});

export const expensesRoute = new Hono()
  .get("/", (c) => {
    return c.json({ expenses: fakeExpenses });
  })
  .post("/", zValidator("json", createPostSchema), async (c) => {
    const expense = await c.req.valid("json");
    fakeExpenses.push({ ...expense, id: fakeExpenses.length + 1 });
    return c.json(expense);
  });
