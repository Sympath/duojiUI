/**
 * 读取指定文件夹下所有指定文件并返回映射对象  key 文件
 * @param {*} dir 读取的指定文件夹路径
 * @param {*} fileType 读取的指定文件
 */
 export const requireByDir = (ctx,cb) => {
    const map = {}
    for (const key of ctx.keys()) {
      map[key] = ctx(key)
      cb(key, map[key])
    }
    console.log(map);
    return map;
  }