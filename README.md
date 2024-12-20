# CRUD TodoList

# This example shows how you can use Tanstack (react-query) for asynchronous state management in React.

## Run example

1. npm install
2. npm run dev

#### JSON-server http://localhost:3000/

#### Frontend http://localhost:5173/

You can see:

1. Tanstack pagination implementation (with split on pages and next/prev buttons)
2. Tanstack infinite pagination (Dynamically loading data)
3. Tanstack example TodoList with remove/toggle/create ToDo item

db.json - database

## Use slow network mode. Go to Network in your browser and select Slow 4G to better understand what is done here

- queryOptions and infiniteQueryOptions implementation
- jsonApiInstance implementation
- Pissimistic and optimistics update (remove and update data)
- Use react-query cache
- Use useSuspenseQuery, useMutation, useQuery,
- Implemented ErrorBoundary
- Use prefetchQuery
- Implemented example without anti-pattern (useEffects)
