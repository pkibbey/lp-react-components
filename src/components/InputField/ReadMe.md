Text Input (auto-focused on load):

```js
<InputField
  type="text"
  value="text input"
  shouldFocusOnLoad
/>
```

Errored Text Input:

```js
<InputField
  type="text"
  value="iofreykshdbfhjkvabfsdkjvgb"
  shouldFocusOnLoad
  error={{
    isError: true,
    hasInteracted: true,
    message: 'invalid input'
  }}
/>
```


Email Input:

```js
<InputField
  type="email"
  value="test@email.com"
/>
```

Password Input:

```js
<InputField
  type="password"
  value="123456"
/>
```
