# Storybook load local image

```json
"storybook": "start-storybook -s ./ -p 9001",
```

# Custom theme

https://www.bekk.christmas/post/2021/3/storybook-background-change-on-prop-change

# BEM

## Two Dashes style

`block-name__elem-name--mod-name--mod-val`

- Names are written in lowercase Latin letters.
- Words within the names of BEM entities are separated by a hyphen (-).
- The element name is separated from the block name by a double underscore (\_\_).
- Boolean modifiers are separated from the name of the block or element by a double hyphen (--).
- The value of a modifier is separated from its name by a double hyphen (--).
- Important: A double hyphen inside a comment (--) may cause an error during validation of an HTML document.

---

Dự án hiện tại có 2 phần cần lưu ý:

- Storybook: Nơi phát triển, quản lí các thành phần(component) của website của bạn
- NextJS: Dự án chính của bạn, nơi bạn kết hợp các component được phát triển ở Storybook của bạn để tạo nên các trang để bạn có thể đưa đến khách hàng.
