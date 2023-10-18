// @ts-nocheck
module.exports = function (source) {
  function processConditionalCommentsInTemplate (template, env) {
    const startTagOpen = /<template>/
    const startTagClose = /<\/template>/
    let result = ''
    let insideTemplate = false

    const lines = template.split('\n')

    for (const line of lines) {
      if (startTagOpen.test(line)) {
        insideTemplate = true
        result += line + '\n'
      } else if (startTagClose.test(line)) {
        insideTemplate = false
        result += line + '\n'
      } else if (insideTemplate) {
        // 处理条件注释标签
        const conditionalComment = line.match(/<!--\s*#ifdef\s+(\w+)\s*-->/)
        if (conditionalComment) {
          const condition = conditionalComment[1]
          if (condition === env) {
            // 如果条件满足，将条件注释标签和内容添加到结果中
            result += line + '\n'
          }
        } else {
          result += line + '\n'
        }
      }
    }

    return result
  }
  const env = 'weapp'
  const processedHTML = processConditionalCommentsInTemplate(source, env)
  return processedHTML
}
