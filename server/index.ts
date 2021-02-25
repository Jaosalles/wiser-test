import { createServer } from 'http';
import next from 'next';
import { parse } from 'url';

const app = next({ dev: false, dir: '../' });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url as string, true);
    handle(req, res, parsedUrl);
  }).listen(5000);
});
