import { app, port } from "./src/app";

app.listen(port, () => console.log(`Server is running at: http://localhost:${port}`))
