When I click the logout button the following error appears. 

Clerk: auth() was called but Clerk can't detect usage of clerkMiddleware(). Please ensure the following:
- Your middleware or proxy file exists at ./middleware.(ts|js) or proxy.(ts|js)
- clerkMiddleware() is used in your Next.js middleware or proxy file.
- Your middleware or proxy matcher is configured to match this route or page.
- If you are using the src directory, make sure the middleware or proxy file is inside of it.

If you've verified your configuration and are still seeing this error, there may be a runtime issue or a problem communicating with Clerk.

For more details, see https://clerk.com/err/auth-middleware
