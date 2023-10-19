import isnode from "..";
test('check the env', () => {
  function run():isnode.jsEnvList|'others'{
    const out = isnode.env()
    console.info(out);
    return out
  }
  expect(isnode.env()).not.toContain('others')
});
test('check the engine', () => {
  function run():isnode.nodeEngineList|'others'{
    const out = isnode.engine()
    console.info(out);
    return out
  }
  expect(run()).not.toContain('others')
});
