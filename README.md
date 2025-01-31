# Wildcard Route Masking Errors in React Router Dom

This repository demonstrates a potential issue when using wildcard routes (`*`) in React Router Dom.  While convenient, a wildcard route can unintentionally mask errors in other route definitions.  The `bug.js` file shows an example where a problem in another route definition might not be immediately apparent because the wildcard route catches all unmatched routes.

The solution, in `bugSolution.js`, involves more careful route definition and potentially improved error handling to make such errors more visible.