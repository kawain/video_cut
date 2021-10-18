const { contextBridge } = require("electron")

contextBridge.exposeInMainWorld(
    "requires",
    {
        exec: require("child_process").exec
    }
);

