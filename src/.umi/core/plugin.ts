// @ts-nocheck
import { Plugin } from '/root/src/v2board-user/node_modules/umi/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['modifyClientRenderOpts','patchRoutes','rootContainer','render','onRouteChange','__mfsu','getInitialState','initialStateConfig','locale','request',],
});

export { plugin };
