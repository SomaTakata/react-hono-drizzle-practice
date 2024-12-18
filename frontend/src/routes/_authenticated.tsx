import { createFileRoute, Outlet } from "@tanstack/react-router";

const Login = () => {
  return <div>Not logged in</div>;
};

const Component = () => {
  const { user } = Route.useRouteContext();
  if (!user) {
    return <Login />;
  }

  return <Outlet />;
};

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async () => {
    // userQueryOptions;
    // return { user: { name: "" } };
    // return { user: { name: "" } };
    return { user: null };
  },
  component: Component,
});
