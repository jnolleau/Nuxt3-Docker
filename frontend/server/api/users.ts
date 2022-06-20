import users from '@/data/users.json'
import { CompatibilityEvent } from "h3";
import { IncomingMessage, ServerResponse } from "http";

export default defineEventHandler((event: CompatibilityEvent) => {
  const query = useQuery(event)
  const id = query.id
  if (!id) {
    return {
      users
    }
  }
  else {
    return users.find(user => user.id == Number(id))
  }
})
