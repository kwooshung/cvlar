import child_process from 'child_process';
import iconv from 'iconv-lite';
import util from 'util';

// 将 child_process.exec 转换为 Promise 形式
const execPromise = util.promisify(child_process.exec);

// 设置缓冲区大小为 1MB
const maxBuffer = 1024 * 1024;

/**
 * 执行命令
 * @description 执行命令并返回结果，如果命令执行失败则退出进程
 * @param {string} command 要执行的命令
 * @param {string} encoding 编码
 * @returns {Promise<{ stdout: string; stderr: string }>} 命令执行结果
 */
const execute = async (command: string, encoding: string = 'gbk'): Promise<{ stdout: string; stderr: string }> => {
  try {
    const { stdout, stderr } = await execPromise(command, { encoding: 'buffer', maxBuffer });

    return {
      stdout: iconv.decode(stdout, encoding),
      stderr: iconv.decode(stderr, encoding)
    };
  } catch (e) {
    throw iconv.decode(e.stderr, encoding);
  }
};

export default execute;
