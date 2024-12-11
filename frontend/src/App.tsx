import { useEffect, useState } from "react";
import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { hc } from "hono/client";
import { type ApiRoutes } from "../../server/app";

const client = hc<ApiRoutes>("/");

function App() {
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    async function fetchTotalSpent() {
      const res = await client.api.expenses["total-spent"].$get();
      const data = await res.json();
      setTotalSpent(data.totalSpent);
    }
    fetchTotalSpent();
  }, []);
  return (
    <Card className="w-[350px] m-auto">
      <CardHeader>
        <CardTitle>Total Spent</CardTitle>
        <CardDescription>The total amount you've spent</CardDescription>
      </CardHeader>
      <CardContent>{totalSpent}</CardContent>
    </Card>
  );
}

export default App;
