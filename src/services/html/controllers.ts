import CONFIG from "../../config";
import { ICtrl } from "../../types/controller";

export const Get: ICtrl<void> = async (_, res) => {
  const html = `
    <html>
      <head>
        <title>Template Node Fastify Mongo</title>
      </head>
      <body>
        <h1>${CONFIG.APP.NAME}</h1>
        <h1>Powered by 
          <a href="http://willskr.com" target="_blank" rel="noopener noreferrer">William Jesus</a>
        </h1>
      </body>
    </html>
  `;
  res.type("text/html").send(html);
};
