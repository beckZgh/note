# Vscode 工作区设置

```json
{
    // 声明为 jsonc 文件可以进行注释
    "files.associations": {
        "pages.json": "jsonc",
        "manifest.json": "jsonc"
    },

    // 配置代码自动保存进行 eslint 修复
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },

    // 排除不显示的文件
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "**/Thumbs.db": true,
        "**/node_modules": true,

        // -------------------
        "packages/admin": true,
        // "packages/crm"   : true,
        "packages/member": true,
        "packages/weapp": true,
        "packages/sumdoo": true
    },

    // 排除搜索时过滤的文件
    "search.exclude": {
        "./packages/admin/**": true,
        // "./packages/crm/**"   : true,
        "./packages/member/**": true,
        "./packages/weapp/**": true,
        "./packages/sumdoo/**": true,

        // -----------------------
        "**/node_modules": true,
        "**/bower_components": true,
        "**/*.code-search": true,
        "**/dist": true
    }
}
```
