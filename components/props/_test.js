import props, { aspectRatio, easeSquish, shadow, layer } from "./index.js";

// console.log(props);

const style = {
    "--shadow-color": shadow.color,
    "--shadow-weight": shadow.weight,
    aspectRatio: aspectRatio.landscape,
    boxShadow: shadow[1],
    zIndex: layer[1],
    transition: `transform 0.3s ${easeSquish[5]}`,
};

console.log(style);
/** Expected result:
 * Values may be different, but the result is the same.
 * {
 *  '--shadow-color': '0 0% 50%',
 *  '--shadow-weight': '1%',
 *  aspectRatio: '4/3',
 *  boxShadow: '0 2px 1px -1px hsl(var(--shadow-color) / calc(var(--shadow-weight) + 18%)), ...)',
 *  zIndex: 1,
 *  transition: 'transform 0.3s cubic-bezier(0.5, -0.9, 0.1, 1.5)'
 *  }
 */
