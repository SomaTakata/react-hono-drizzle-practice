import { userQueryOptions } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/profile')({
  component: Profile,
})

function Profile() {
  const { isPending, error, data } = useQuery(userQueryOptions)

  if (isPending) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>not logged in</div>
  }

  return <div className="p-2">Hello {data.user.family_name}</div>
}
