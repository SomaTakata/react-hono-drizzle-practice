import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/create-expense")({
  component: CreateExpense,
});

function CreateExpense() {
  return (
    <div className="pt-5">
      <form className="max-w-3xl m-auto space-y-3">
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="title">Email</Label>
          <Input type="text" id="title" placeholder="Title" />
        </div>
        <div className="grid w-full  items-center gap-1.5">
          <Label htmlFor="amount">Amount</Label>
          <Input type="number" id="amount" placeholder="Amount" />
        </div>
        <Button className="mt-4" type="submit">
          Create Expense
        </Button>
      </form>
    </div>
  );
}
