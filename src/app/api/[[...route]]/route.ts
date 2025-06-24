import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import coffees from "~/data.json"

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/coffees', (c) => {
   const filter = c.req.query('filter');
   const category = c.req.queries("category");
   const query = c.req.query('query');

   let data = coffees;

   if (filter === 'best_selling') data = data.filter(c => c.bestSeller);
   if (filter === 'featured') data = data.filter(c => c.featured);
   if (category && category.length > 0) {
      data = data.filter(c => category.includes(c.category));
   }
   
   if (query) {
      const term = query.toLowerCase();
      data = data.filter(coffee =>
         coffee.name.toLowerCase().includes(term) ||
         coffee.description.toLowerCase().includes(term)
      );
   }

   return c.json(data);
});

export const GET = handle(app)
export const POST = handle(app)