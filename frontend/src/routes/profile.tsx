import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: Profile,
});

async function getCurrentUser() {
  const res = await api.me.$get();
  if (!res.ok) {
    throw new Error("Failed to fetch total spent");
  }
  const data = await res.json();
  return data;
}

function Profile() {
  const { isPending, error, data } = useQuery({
    queryKey: ["get-query-spent"],
    queryFn: getCurrentUser,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>not logged in</div>;
  }

  return <div className="p-2">Hello {data.user.family_name}</div>;
}
