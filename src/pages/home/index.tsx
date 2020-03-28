import React from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';

import Home from '../../components/Home';

export default (req: Request, res: Response) => {
  res.send(`<html>
<head>
    <meta charset="UTF-8" />
</head>
<body>
  <h1>Corvid-19 Stats..</h1>
  <main>${renderToString(<Home />)}</main>
  <script src="home.js"></script>
</body>
</html>
`);
};
