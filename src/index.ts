/**
 * Required External Modules
 * These are the installed dependencies.
 */
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/notFound.middleware";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 *  Section to mount middlewares and another App configurations.
 */

app.use(helmet()); //helmet is a collection of 14 small middleware functions that set HTTP response headers.
app.use(cors()); //by mounting cors(), you enable all CORS requests.
app.use(express.json()); //parse incoming requests with JSON payloads
app.use("/items", itemsRouter);

//Using error handlers middlewares.
app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 * Creating an express server
 */

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

/**
 * Webpack HMR Activation
 */

type ModuleId = string | number;

interface WebpackHotModule {
    hot?: {
        data: any;
        accept(
            dependencies: string[],
            callbacks?: (updateDependencies: ModuleId[]) => void,
        ): void;
        accept(dependencies: string, callback?: () => void): void;
        accept(errHandler?: (err: Error) => void): void;
        dispose(callback: (data: any) => void): void;
    };
}

declare const module: WebpackHotModule;

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}