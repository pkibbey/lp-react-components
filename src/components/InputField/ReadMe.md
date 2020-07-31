Default text input

```js
<InputField
  type="text"
  value="text input"
/>
```

Errored text input

```js
<InputField
  type="text"
  value="iofreykshdbfhjkvabfsdkjvgb"
  error={{
    isError: true,
    hasInteracted: true,
    message: 'invalid input'
  }}
/>
```


Email input

```js
<InputField
  type="email"
  value="test@email.com"
/>
```

Password input

```js
<InputField
  type="password"
  value="123456"
/>
```
