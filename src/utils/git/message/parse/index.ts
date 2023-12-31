import { TCommitCategory } from '@/interface';

/**
 * 清除字符串中的空格
 * @param {string} str 字符串
 * @param {boolean} trim 是否清除两端空格，默认：true
 * @returns {string} 清除空格后的字符串
 */
const cleanString = (str: string, trim: boolean = true): string => {
  let result = str;
  if (trim) {
    result = result.trim();
  }
  return result.trimStart().replace(/^[\s\uFE0F\uFEFF\xA0\u2000-\u200B\u2028\u2029\u3000]+/, '');
};

/**
 * 解析 git commit message
 * @param {string} commitMessage git commit message
 * @returns {object} 解析结果
 */
const parse = (commitMessage: string): TCommitCategory => {
  const result: TCommitCategory = {
    full: '',
    emojiOrType: '',
    emoji: '',
    type: '',
    scope: '',
    message: ''
  };

  // 匹配是否包含 type 和 scope
  const typeScopeMatch = commitMessage.match(/^(.*?)(\(.+?\))?:\s*(.*)/);

  if (typeScopeMatch) {
    result.full = commitMessage;
    result.emojiOrType = cleanString(typeScopeMatch[1]);
    result.message = cleanString(typeScopeMatch[3]);

    // 从 emojiOrType 中单独提取 emoji
    const emojiMatch = result.emojiOrType.match(/^(\p{Emoji}*)/u);
    if (emojiMatch) {
      result.emoji = cleanString(emojiMatch[1]);
    }

    // 从 emojiOrType 中提取 type
    result.type = cleanString(result.emojiOrType.replace(/^(\p{Emoji}*\s*)?/u, ''), false);

    // 提取 scope（小括号里面的）
    if (typeScopeMatch[2]) {
      result.scope = cleanString(typeScopeMatch[2].replace(/[()]/g, ''));
    }
  } else {
    // 如果不包含 type 和 scope，则整个消息都是 message
    result.message = commitMessage.trim();
  }

  return result;
};

export default parse;
