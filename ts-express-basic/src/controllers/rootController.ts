import { get, controller, use } from './decorators/';
import { Request, Response, NextFunction } from 'express';

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) {
    next();
    return;
  }

  res.status(403).send('Not Permitted');
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(`
        <div>
          <div>You are logged in.</div>
          <a href="/auth/logout">Logout</a>
        </div>
      `);
    } else {
      res.send(`
      <div>
        <div>You are logged out.</div>
        <a href="/auth/login">Login</a>
      </div>
      `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome, you are logged in');
  }
}
