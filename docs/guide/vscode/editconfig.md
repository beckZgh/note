# Vscode 编码配置

## 安装 vscode 插件

vscode 中找到 `EditorConfig for VS Code` 扩展，并进行安装

## 创建 .editconfig 文件

```
# 表示是最顶层的配置文件，设为true时，才会停止查找.editorconfig文件
root = true

[*]
# 字符集为 utf-8
charset = utf-8

# 设置空格缩进
indent_style = space
indent_size = 4
max_line_length = 100

# 设置换行符，值为lf、cr和crlf
# 始终在文件末尾插入一个新行
# 去除换行行首的任意空白字符。
end_of_line = crlf
insert_final_newline = true
trim_trailing_whitespace = true

# 使用单引号
quote_type = single

[*.{ts,tsx,js,jsx,vue}]
formatOnSave = true
```
