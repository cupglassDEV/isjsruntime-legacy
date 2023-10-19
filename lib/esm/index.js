function tryit(cb, cbfalse) {
    try {
        cb();
        // eslint-disable-next-line no-empty
    }
    catch (e) {
    }
    cbfalse();
}
function isbrowser() {
    try {
        if (typeof process !== "undefined" && process.versions.node !== null)
            return false;
    }
    catch (e) {
        return true;
    }
    return true;
}
export var isnode;
(function (isnode) {
    /**
     * detect the js enviroment
     * @since 0.0.1
     * @param [legacy=false] enable the legacy mode for the jsdom detector
     */
    function env(legacy = false) {
        // eslint-disable-next-line no-var
        var returns = 'others';
        (() => {
            tryit(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                if (typeof process !== "undefined" && (process.jxversion !== undefined && typeof jxcore !== "undefined")) {
                    returns = 'jx';
                }
            }, () => {
                tryit(() => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    if (typeof Deno !== "undefined" && typeof Deno.version.deno !== "undefined") {
                        returns = 'deno';
                    }
                }, () => {
                    tryit(() => {
                        if (typeof self !== "undefined" && self.constructor.name === "DedicatedWorkerGlobalScope") {
                            returns = 'webworkers';
                        }
                    }, () => {
                        tryit(() => {
                            if ((legacy ? navigator.userAgent.includes("Node.js") : navigator.userAgent.includes("jsdom")) || window.name === 'nodejs')
                                returns = 'jsdom';
                        }, () => {
                            if (process.release.name === 'node')
                                returns = 'node';
                            else if (process.release.name === 'io.js')
                                returns = 'iojs';
                            else if (isbrowser())
                                returns = 'browser';
                        });
                    });
                });
            });
        })();
        return returns;
    }
    isnode.env = env;
    /**
     * detect the node engine. Such as ```v8```, and more
     * @since 0.0.1
     */
    function engine() {
        if (isbrowser())
            throw new Error('This function only works if the node enviroment is in the native version');
        // eslint-disable-next-line no-var
        var returns = 'others';
        function include(r, str) {
            if (Object.keys(process.versions).includes(r))
                returns = str;
            else
                throw new Error();
        }
        include('v8', 'v8');
        if (returns === 'others')
            include('ch', 'chakra');
        if (returns === 'others')
            include('sm', 'spidermonkey');
        return returns;
    }
    isnode.engine = engine;
})(isnode || (isnode = {}));
export default isnode;
//# sourceMappingURL=index.js.map