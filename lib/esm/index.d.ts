export declare namespace isnode {
    /**
     * js enviroment list
     * @since 0.0.1
     */
    type jsEnvList = 'jx' | 'node' | 'deno' | 'iojs' | 'browser' | 'jsdom' | 'webworkers';
    /**
     * detect the js enviroment
     * @since 0.0.1
     * @param [legacy=false] enable the legacy mode for the jsdom detector
     */
    function env(legacy?: boolean): jsEnvList | 'others';
    /**
     * node engine list
     * @since 0.0.1
     */
    type nodeEngineList = 'v8' | 'chakra' | 'spidermonkey';
    /**
     * detect the node engine. Such as ```v8```, and more
     * @since 0.0.1
     */
    function engine(): nodeEngineList | 'others';
}
export default isnode;
